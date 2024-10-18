const Recipe = require("../models/recipe");

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().select("title"); 
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get By Title 
const getRecipeByTitle = async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ title: req.params.title })
      .populate("cuisine")
      .populate("directions");
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a recipe by ID
const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe)
      return res.status(404).json({ error: "Recipe not found" });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete recipe
const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe)
      return res.status(404).json({ error: "Recipe not found" });
    res.json(deletedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeByTitle,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
