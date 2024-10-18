const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    ingredients: [{ quantity: Number, unit: String, ingredient: String }],
    cuisine: { type: Schema.Types.ObjectId, ref: "Cuisine" },
    prepTime: { hours: Number, minutes: Number },
    cookTime: { hours: Number, minutes: Number },
    servings: Number,
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"] },
    dietaryInfo: {
      type: [String],
      enum: ["Vegan", "Gluten-free", "Kosher", "Halal", "Vegetarian"],
    },
    directions: [{ type: Schema.Types.ObjectId, ref: "Direction" }],
    ovenTemp: { value: Number, unit: { type: String, enum: ["F", "C"] } },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;