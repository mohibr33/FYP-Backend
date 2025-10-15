const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const {
  createArticle, getArticles, getArticleById, updateArticle, deleteArticle, searchArticlesByTitle
} = require("../controllers/articleController");

// Public routes
router.get("/", getArticles);
router.get("/:id", getArticleById);

// Admin routes
router.post("/", verifyToken, verifyAdmin, createArticle);
router.put("/:id", verifyToken, verifyAdmin, updateArticle);
router.delete("/:id", verifyToken, verifyAdmin, deleteArticle);
router.get("/search", verifyToken,verifyAdmin , searchArticlesByTitle);

module.exports = router;
