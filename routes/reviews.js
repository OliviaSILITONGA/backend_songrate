const express = require('express');
const router = express.Router();
const { getAllReviews, addReview } = require('../controllers/reviewsController');
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/', getAllReviews);

router.post('/',authMiddleware, addReview);

module.exports = router; 