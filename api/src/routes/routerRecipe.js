const {getIdRecipeHandlers,
  //  createRecipeHandlers,
    newRecipeHandler} = require('../Handlers/handlerRecipe');
const {Router} = require ('express');
const recipe = Router()





// recipe.post('/', createRecipeHandlers); 

recipe.get('/:id', getIdRecipeHandlers);



recipe.post('/', newRecipeHandler)

module.exports = recipe; 