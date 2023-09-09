const axios = require("axios");
const { Recipe } = require("../db.js");
const { API_KEY } = process.env;



 
const baseId = async (id) => { 

  const url =`https://api.spoonacular.com/recipes/${id}/information?apiKey=${ API_KEY }`
  
  const dataRecipeId = ( await axios.get ( url )).data

  const dietsApi = [...dataRecipeId.diets];

  const sumary = dataRecipeId.summary.replace(/<[^>]+>/g, ""); 

  dataRecipeId.vegetarian && dietsApi.push("vegetarian");

  dataRecipeId.vegan && dietsApi.push("vegan");
  
  dataRecipeId.glutenFree && dietsApi.push("glutenFree");
  

  
  let dietsFilt = [...new Set(dietsApi)]; 


  let allSteps = [];
  
  dataRecipeId.analyzedInstructions.map((element) => {
      let arr = [];
      element.steps.map((step) => {
          arr.push(`step number: ${step.number}  ${step.step}`);      
        });
        element.name === "" || " "
        ?  allSteps.push([ arr]) 
        : allSteps.push([element.name, arr])  
      
        return arr;
  });

  
  const idApi = {
    id: dataRecipeId.id,
    name: dataRecipeId.title,
    image: dataRecipeId.image,
    summary: sumary,    
    healthScore: dataRecipeId.healthScore,
    diets: dietsFilt,
    steps: !allSteps.length  ? 'there is no steps for this recipe' : allSteps.flat(3),

  };

   return idApi


}




const getIdRecipe = async (id, source) => {
 


  const recipe = source === "api" ? baseId(id) : await Recipe.findByPk(id,{include: Diet })
   return recipe


}









const newRecipe = async(name, image, summary,diets, healthScore, steps) => {
  return await Recipe.create({name, image, summary,diets, healthScore, steps, })
}



module.exports = {
  newRecipe,
  getIdRecipe 
  };   