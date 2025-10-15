const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const { createReview, deleteReview, editReview, getAllReviews, getReviewsByMedicineName} = require("../controllers/reviewContoller");

// Create review (user)
router.post("/", verifyToken, createReview);

// Edit review (admin only)
router.put("/:id", verifyToken, verifyAdmin, editReview);

// Delete review (admin only)
router.delete("/:id", verifyToken, verifyAdmin, deleteReview);

// Get all reviews
router.get("/", verifyToken, getAllReviews);

// Get reviews by medicine name (user search)
router.get("/search", verifyToken, getReviewsByMedicineName);

module.exports = router;