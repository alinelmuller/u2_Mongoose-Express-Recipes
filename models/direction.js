const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const directionSchema = new Schema(
  {
    stepNumber: Number,
    description: { type: String, required: true },
    recipe: { type: Schema.Types.ObjectId, ref: "Recipe" },
  },
  { timestamps: true }
);


const Direction = mongoose.model("Direction", directionSchema);
module.exports = Direction;

