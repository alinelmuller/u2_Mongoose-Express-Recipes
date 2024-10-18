const express = require("express");
const router = express.Router();
const { getDirectionByStep } = require("../controllers/directionController");

// Show route: Get a direction by step number
router.get("/directions/:stepNumber", getDirectionByStep);

module.exports = router;
