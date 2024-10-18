const express = require("express");
const mongoose = require("mongoose");
const cuisineRoutes = require("./routes/cuisineRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const directionRoutes = require("./routes/directionRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/recipeDB", {});

app.use("/cuisines", cuisineRoutes);
app.use("/recipes", recipeRoutes);
app.use("/directions", directionRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


