const Cuisine = require("../models/cuisine");

// Get all cuisines
const getAllCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find().select("name"); 
    res.json(cuisines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get By Name 
const getCuisineByName = async (req, res) => {
  try {
    const cuisine = await Cuisine.findOne({ name: req.params.name }).populate(
      "recipes"
    );
    if (!cuisine) return res.status(404).json({ error: "Cuisine not found" });
    res.json(cuisine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new cuisine
const createCuisine = async (req, res) => {
  try {
    const newCuisine = new Cuisine(req.body);
    const savedCuisine = await newCuisine.save();
    res.status(201).json(savedCuisine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a cuisine by ID
const updateCuisine = async (req, res) => {
  try {
    const updatedCuisine = await Cuisine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCuisine)
      return res.status(404).json({ error: "Cuisine not found" });
    res.json(updatedCuisine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a cuisine by ID
const deleteCuisine = async (req, res) => {
  try {
    const deletedCuisine = await Cuisine.findByIdAndDelete(req.params.id);
    if (!deletedCuisine)
      return res.status(404).json({ error: "Cuisine not found" });
    res.json(deletedCuisine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllCuisines,
  getCuisineByName,
  createCuisine,
  updateCuisine,
  deleteCuisine,
};
