const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db.js");


const { API_KEY } = process.env;



const clean = (arr) =>
  arr.results.map((e) => {
    return {
      id: e.id,
      name: e.title,
      diets: e.diets,
      image: e.image,
      summary: e.summary.replace(/<[^>]+>/g, ""),
      healthScore: e.healthScore,
      steps:  e.analyzedInstructions[0]?.steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
      created: false,
    };
  });





  
  
  
  const searchRecipeByname = async (name) => {
    const databaseRecipe = await Recipe.findAll({includes: Diet})
    
    
    const apiInfo = (
      await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=3967111cef7f40839688189c52001aba&addRecipeInformation=true&number=100`
        )
        ).data;
        
        const apiRecipe = clean(apiInfo);
        
        const filtApi = apiRecipe.filter((recipe) => recipe.name.includes(name));
        
        return [...filtApi, ...databaseRecipe];
      };
      
      
      
      const getAllApiRecipe = async () => {
        const bdRecipe = await Recipe.findAll();
        
        const apiInfo = (
          await axios.get(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ API_KEY }&addRecipeInformation=true&number=100`
          )
        ).data;
      
        const apiRecipe = clean(apiInfo);
      
        return [...bdRecipe, ...apiRecipe];
      };






const updateRecipe = async (id, name, image, summary,  healthScore, steps) => { 
  const recipe = await Recipe.findByPk( id );
  

  if(!recipe)  throw Error(`el id:${id} no existe`)

  if(!name || !image  ) {
    throw  Error('falla los datos de la mision')}
    
    
    
    await Recipe.update(
      {name, image, },{
        where:{
          id
        }
      }

      )

      return `${name} Ha sido actualizado`
  }



const deleteId = async (id ) => {
  
  const idEl = await Recipe.findByPk( id );
  await idEl.destroy()
  return`La receta ${idEl.name}  ya no esta se elimino `

}

module.exports = {
  getAllApiRecipe,
  searchRecipeByname,
  updateRecipe,
  deleteId
  
};
