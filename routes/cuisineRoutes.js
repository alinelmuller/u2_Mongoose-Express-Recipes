const express = require("express");
const router = express.Router();
const {
    getAllCuisines,
    getCuisineByName,
    createCuisine,
    updateCuisine,
    deleteCuisine,
  } = require("../controllers/cuisineController");


router.get("/", getAllCuisines);
router.get("/:name", getCuisineByName);
router.post("/", createCuisine);
router.put("/:id", updateCuisine);
router.delete("/:id", deleteCuisine);

module.exports = router;
