const express = require('express');
const router = express.Router();
const { getAllReviews, addReview } = require('../controllers/reviewsController');


router.get('/', getAllReviews);

router.post('/', addReview);

module.exports = router;