const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const { createTicket, getAllTickets, resolveTicket } = require("../controllers/supportController");

// User route
router.post("/", verifyToken, createTicket);

// Admin routes
router.get("/", verifyToken, verifyAdmin, getAllTickets);
router.put("/:id", verifyToken, verifyAdmin, resolveTicket);

module.exports = router;
