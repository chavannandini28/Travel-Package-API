const express = require("express");

const router = express.Router();

const {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  searchPackage
} = require("../controllers/apiController");


// Add Package
router.post("/", addPackage);


// Get All Packages
router.get("/", getAllPackages);


// Search Package
router.get("/search", searchPackage);


// Get Package By ID
router.get("/:id", getPackageById);


// Update Package
router.put("/:id", updatePackage);


// Delete Package
router.delete("/:id", deletePackage);


module.exports = router;