const Comment = require('../models/comment'); 
const User = require('../models/user'); // Asumsi User ada

const getAllReviews = async () => {
  return await Comment.findAll({
    include: [
      {
        model: User,
        as: 'user', 
        attributes: ['username']
      }
    ],
    order: [['createdAt', 'DESC']]
  });
};

// Parameter hanya 'data' (satu objek)
const addReview = async (data) => {
  // Kita bongkar (destructure) data di sini
  const { userId, title, artist, rating, message } = data;
  
  const newReview = await Comment.create({
    userId, // Ini akan dipetakan ke 'user_id' oleh Model
    title,
    artist,
    rating,
    message
  });

  return newReview;
};

module.exports = {
  getAllReviews,
  addReview
};