# Mongoose Express Recipes

This project involves creating an Express server with a Mongoose database to manage recipes, cuisines, and cooking directions.

## Getting Started

1. **Clone the repository**.
2. **Install dependencies**: Run `npm install`.
3. **Start the server**: Use `node server.js`.
4. **Access routes**: Visit `http://localhost:3000` and test the endpoints.

## Objectives

1. **Cuisines Route**: Get all cuisines availables.  
    Example: `http://localhost:3000/cuisines`

2. **Recipe**: Get a specific recipe by title.
    Example: `http://localhost:3000/recipes/Vanilla%20Cake`
   
2. **Create Recipe**: Add a new recipe to the database.  
   Example: 
`POST /recipes
{
  "title": "Chocolate Mousse",
  "ingredients": [
    { "quantity": 200, "unit": "g", "ingredient": "dark chocolate" },
    { "quantity": 3, "unit": "large", "ingredient": "eggs" }
  ],
  "prepTime": { "hours": 0, "minutes": 30 },
  "cookTime": { "hours": 0, "minutes": 15 },
  "servings": 4,
  "difficulty": "Easy",
  "directions": ["Melt chocolate", "Beat eggs", "Combine and chill"]
}`

   
3. **Update Recipe**: Update an existing recipe by ID. 
   Example: `PUT /recipes/:id`

4. **Delete Cuisine**: Delete a cuisine by ID.  
   Examples: `DELETE /cuisines/:id`

## Technologies Used

- Node.js
- Express.js
- Mongoose
- MongoDB