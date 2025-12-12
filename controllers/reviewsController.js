const commentsService = require('../services/addcomments');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await commentsService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error getting reviews:", error);
    res.status(500).json({ error: error.message });
  }
};

const addReview = async (req, res) => {
  try {
    const { userId, title, artist, rating, message } = req.body;

    console.log("📥 Menerima Data Review:", req.body);

    // VALIDASI SEDERHANA DI CONTROLLER
    if (!userId || !title || !artist || !rating || !message) {
      return res.status(400).json({ error: "Semua field harus diisi!" });
    }

    // GABUNGKAN DATA UNTUK DIKIRIM KE SERVICE
    // Kita bungkus semuanya jadi satu objek 'payload'
    const payload = {
      userId,
      title,
      artist,
      rating,
      message
    };

    const newReview = await commentsService.addReview(payload);

    res.status(201).json({ 
      message: "Review berhasil ditambahkan", 
      data: newReview 
    });
  } catch (error) {
    console.error("❌ Error adding review:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports = {
  getAllReviews,
  addReview
};