const Article = require("../models/article");

// Add new article (Admin only)
exports.createArticle = async (req, res) => {
  try {
    const { title, imageUrl, category, shortDescription, content } = req.body;

    const article = new Article({
      title,
      imageUrl,
      category,
      shortDescription,
      content,
      createdBy: req.user._id
    });

    await article.save();
    res.status(201).json({ message: "Article created successfully", article });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all articles (with optional category)
exports.getArticles = async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const articles = await Article.find(filter).sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single article(user)
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search articles by title(for admin pannel search bar)
exports.searchArticlesByTitle = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ error: "Title query parameter is required" });
    }
    const articles = await Article.find({
      title: { $regex: title, $options: "i" }
    }).sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ...existing code...

// Update article (Admin only)
exports.updateArticle = async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Article updated successfully", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete article (Admin only)
exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
