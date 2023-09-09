const {Router} = require ('express');
const {
  // createRecipeHandlers, 
  getAllRecipesHandlers, 
  // getIdRecipeHandlers, 
  deleteRecipeIdHandlers, 
  putRecipeIdHandlers
} = require('../Handlers/handlerRecipes');

const recipes = Router()

// recipes.get('/:id', getIdRecipeHandlers);


recipes.get('/', getAllRecipesHandlers);


// recipes.post('/', createRecipeHandlers); 


recipes.put('/:id', putRecipeIdHandlers);


recipes.delete('/:id', deleteRecipeIdHandlers);




module.exports = recipes;