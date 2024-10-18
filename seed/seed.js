const mongoose = require("mongoose");
const Cuisine = require("../models/cuisine");
const Recipe = require("../models/recipe");
const Direction = require("../models/direction");
const db = require("../db/index");

const seedDB = async () => {
  try {
    await Direction.deleteMany({});
    await Recipe.deleteMany({});
    await Cuisine.deleteMany({});

    const directions = [
      new Direction({ stepNumber: 1, description: "Preheat the oven to 350°F" }),
      new Direction({ stepNumber: 2, description: "Mix flour and sugar" }),
      new Direction({ stepNumber: 3, description: "Bake for 25 minutes" }),
      new Direction({ stepNumber: 1, description: "Chop vegetables" }),
      new Direction({ stepNumber: 2, description: "Sauté in olive oil" }),
      new Direction({ stepNumber: 3, description: "Simmer for 30 minutes" }),
      new Direction({ stepNumber: 1, description: "Cook pasta until al dente" }),
      new Direction({ stepNumber: 2, description: "Prepare sauce in a separate pan" }),
      new Direction({ stepNumber: 3, description: "Combine pasta and sauce" }),
      new Direction({ stepNumber: 1, description: "Marinate chicken in spices" }),
      new Direction({ stepNumber: 2, description: "Grill chicken until cooked through" }),
      new Direction({ stepNumber: 3, description: "Serve with fresh herbs" }),
      new Direction({ stepNumber: 1, description: "Mix ingredients for dough" }),
      new Direction({ stepNumber: 2, description: "Roll out dough and cut into shapes" }),
      new Direction({ stepNumber: 3, description: "Bake until golden brown" }),
      new Direction({ stepNumber: 1, description: "Cook beans in water for 2 hours" }),
      new Direction({ stepNumber: 2, description: "Add spices and simmer" }),
      new Direction({ stepNumber: 3, description: "Serve with rice and farofa" }),
      new Direction({ stepNumber: 1, description: "Mix cassava flour with melted butter" }),
      new Direction({ stepNumber: 2, description: "Shape dough into balls" }),
      new Direction({ stepNumber: 3, description: "Bake until golden" }),
      new Direction({ stepNumber: 1, description: "Sauté garlic and onion" }),
      new Direction({ stepNumber: 2, description: "Add shrimp and cook until pink" }),
      new Direction({ stepNumber: 3, description: "Serve with lime" }),
    ];

    await Direction.insertMany(directions);

    const recipes = [
      new Recipe({
        title: "Vanilla Cake",
        ingredients: [
          { quantity: 2, unit: "cups", ingredient: "flour" },
          { quantity: 1, unit: "cup", ingredient: "sugar" },
          { quantity: 1, unit: "cup", ingredient: "butter" },
          { quantity: 2, unit: "large", ingredient: "eggs" },
        ],
        prepTime: { hours: 0, minutes: 15 },
        cookTime: { hours: 0, minutes: 25 },
        servings: 8,
        difficulty: "Medium",
        directions: [directions[0]._id, directions[1]._id, directions[2]._id],
      }),
      new Recipe({
        title: "Vegetable Soup",
        ingredients: [
          { quantity: 1, unit: "cup", ingredient: "carrots" },
          { quantity: 1, unit: "cup", ingredient: "onions" },
          { quantity: 1, unit: "cup", ingredient: "tomatoes" },
          { quantity: 4, unit: "cups", ingredient: "vegetable broth" },
        ],
        prepTime: { hours: 0, minutes: 10 },
        cookTime: { hours: 0, minutes: 30 },
        servings: 4,
        difficulty: "Easy",
        directions: [directions[3]._id, directions[4]._id],
      }),
      new Recipe({
        title: "Pasta Primavera",
        ingredients: [
          { quantity: 8, unit: "oz", ingredient: "pasta" },
          { quantity: 2, unit: "cups", ingredient: "mixed vegetables" },
          { quantity: 1, unit: "cup", ingredient: "olive oil" },
          { quantity: 1, unit: "cup", ingredient: "Parmesan cheese" },
        ],
        prepTime: { hours: 0, minutes: 15 },
        cookTime: { hours: 0, minutes: 20 },
        servings: 4,
        difficulty: "Easy",
        directions: [directions[6]._id, directions[7]._id, directions[8]._id],
      }),
      new Recipe({
        title: "Grilled Chicken",
        ingredients: [
          { quantity: 4, unit: "pieces", ingredient: "chicken breast" },
          { quantity: 2, unit: "tablespoons", ingredient: "olive oil" },
          { quantity: 1, unit: "teaspoon", ingredient: "paprika" },
          { quantity: 1, unit: "teaspoon", ingredient: "salt" },
        ],
        prepTime: { hours: 0, minutes: 10 },
        cookTime: { hours: 0, minutes: 20 },
        servings: 4,
        difficulty: "Medium",
        directions: [directions[9]._id, directions[10]._id],
      }),
      new Recipe({
        title: "Sugar Cookies",
        ingredients: [
          { quantity: 2, unit: "cups", ingredient: "flour" },
          { quantity: 1, unit: "cup", ingredient: "sugar" },
          { quantity: 1, unit: "cup", ingredient: "butter" },
          { quantity: 1, unit: "large", ingredient: "egg" },
        ],
        prepTime: { hours: 0, minutes: 15 },
        cookTime: { hours: 0, minutes: 10 },
        servings: 24,
        difficulty: "Easy",
        directions: [directions[11]._id, directions[12]._id, directions[2]._id],
      }),
      new Recipe({
        title: "Feijoada",
        ingredients: [
          { quantity: 1, unit: "lb", ingredient: "black beans" },
          { quantity: 1, unit: "lb", ingredient: "pork shoulder" },
          { quantity: 1, unit: "lb", ingredient: "sausage" },
          { quantity: 1, unit: "cup", ingredient: "onion" },
          { quantity: 1, unit: "tablespoon", ingredient: "garlic" },
          { quantity: 1, unit: "teaspoon", ingredient: "bay leaves" },
        ],
        prepTime: { hours: 1, minutes: 0 },
        cookTime: { hours: 2, minutes: 0 },
        servings: 6,
        difficulty: "Hard",
        directions: [directions[14]._id, directions[1]._id],
      }),
      new Recipe({
        title: "Pão de Queijo",
        ingredients: [
          { quantity: 1, unit: "cup", ingredient: "tapioca flour" },
          { quantity: 1, unit: "cup", ingredient: "milk" },
          { quantity: 1, unit: "cup", ingredient: "cheese" },
          { quantity: 1, unit: "large", ingredient: "egg" },
          { quantity: 1, unit: "teaspoon", ingredient: "salt" },
        ],
        prepTime: { hours: 0, minutes: 15 },
        cookTime: { hours: 0, minutes: 30 },
        servings: 12,
        difficulty: "Medium",
        directions: [directions[11]._id, directions[12]._id, directions[8]._id],
      }),
      new Recipe({
        title: "Shrimp Moqueca",
        ingredients: [
          { quantity: 1, unit: "lb", ingredient: "shrimp" },
          { quantity: 1, unit: "cup", ingredient: "coconut milk" },
          { quantity: 1, unit: "cup", ingredient: "bell pepper" },
          { quantity: 1, unit: "cup", ingredient: "onion" },
          { quantity: 1, unit: "tablespoon", ingredient: "lime juice" },
        ],
        prepTime: { hours: 0, minutes: 20 },
        cookTime: { hours: 0, minutes: 40 },
        servings: 4,
        difficulty: "Medium",
        directions: [directions[5]._id, directions[15]._id, directions[11]._id],
      }),
    ];

    // Save all recipes
    await Recipe.insertMany(recipes);

    const cuisines = [
      new Cuisine({
        name: "American",
        origin: "USA",
        recipes: [recipes[0]._id, recipes[3]._id, recipes[4]._id],
      }),
      new Cuisine({
        name: "Italian",
        origin: "Italy",
        recipes: [recipes[2]._id],
      }),
      new Cuisine({
        name: "Mediterranean",
        origin: "Various",
        recipes: [recipes[1]._id],
      }),
      new Cuisine({
        name: "Brazilian",
        origin: "Brazil",
        recipes: [recipes[5]._id, recipes[6]._id, recipes[7]._id],
      }),
    ];

    await Cuisine.insertMany(cuisines);

    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error.message);
  }
};

const run = async () => {
  await seedDB();
  mongoose.connection.close(); 
};

run();
