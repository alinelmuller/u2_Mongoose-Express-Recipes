const mongoose = require("mongoose");

const cuisineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] 
});

const Cuisine = mongoose.model("Cuisine", cuisineSchema);
module.exports = Cuisine;
