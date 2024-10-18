const Direction = require("../models/direction");

// Get all directions
const getAllDirections = async (req, res) => {
  try {
    const directions = await Direction.find().populate("recipe");
    res.json(directions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get directions by step number
const getDirectionByStep = async (req, res) => {
  try {
    const direction = await Direction.findOne({
      stepNumber: req.params.stepNumber,
    }).populate("recipe");
    if (!direction)
      return res.status(404).json({ error: "Direction not found" });
    res.json(direction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new direction
const createDirection = async (req, res) => {
  try {
    const newDirection = new Direction(req.body);
    const savedDirection = await newDirection.save();
    res.status(201).json(savedDirection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a direction
const updateDirection = async (req, res) => {
  try {
    const updatedDirection = await Direction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDirection)
      return res.status(404).json({ error: "Direction not found" });
    res.json(updatedDirection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a direction
const deleteDirection = async (req, res) => {
  try {
    const deletedDirection = await Direction.findByIdAndDelete(req.params.id);
    if (!deletedDirection)
      return res.status(404).json({ error: "Direction not found" });
    res.json(deletedDirection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllDirections,
  getDirectionByStep,
  createDirection,
  updateDirection,
  deleteDirection,
};
