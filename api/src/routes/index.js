const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const recipes = require ('./routerRecipes')
const recipe = require('./routerRecipe');
const diets = require('./routerDiets');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 
router.use('/recipes',recipes);
router.use('/recipe',recipe);
router.use('/diets',diets);



module.exports = router;
   