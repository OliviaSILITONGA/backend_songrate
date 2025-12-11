const Comment = require('../models/coment');
const User = require('../models/user');

// Ambil semua review (untuk ditampilkan di halaman "Posted" atau "Home")
const getAllReviews = async () => {
  try {
    return await Comment.findAll({
        order: [['created_at', 'DESC']] // Urutkan dari yang terbaru
    });
  } catch (error) {
    throw error;
  }
};

// Fungsi Membuat Review Baru
const addReview = async (userId, reviewData) => {
  try {
    //  Cek User (Wajib Login)
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error("User not found. Please login.");
    }

    //  Simpan Review langsung ke database
    const newReview = await Comment.create({
        user_id: user.id,
        username: user.username,
        title: reviewData.title,
        artist: reviewData.artist,
        album: reviewData.album,
        rating: reviewData.rating,
        message: reviewData.message
    });

    return newReview;

  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};

module.exports = {
  getAllReviews,
  addReview
};