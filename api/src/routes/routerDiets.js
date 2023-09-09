const {Router} = require ('express');
const {getDietshandler} = require ('../Handlers/handlerDiet');
const diets = Router();




diets.get('/', getDietshandler);
  

module.exports = diets;