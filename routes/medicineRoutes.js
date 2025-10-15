const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const { addMedicine, updateMedicine, deleteMedicine, getAllMedicine,getMedicinesByCategory} = require("../controllers/CommonmedicineController");

// Add medicine (admin only)
router.post("/", verifyToken, verifyAdmin, addMedicine);

// Update medicine (admin only)
router.put("/:id", verifyToken, verifyAdmin, updateMedicine);

// Delete medicine (admin only)
router.delete("/:id", verifyToken, verifyAdmin, deleteMedicine);

// Get all medicine (any authenticated user)
router.get("/", verifyToken, getAllMedicine);

//get medicine by category: (for users)
 router.get("/common", getMedicinesByCategory);

module.exports = router;
