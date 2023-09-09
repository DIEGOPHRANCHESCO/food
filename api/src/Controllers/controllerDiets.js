const  axios = require ('axios');
const {Diet} = require('../db');
const {API_KEY} =  process.env


const allDiets = async() => {

  const dies={
    glutenFree: "gluten free",
    ketogenic: "ketogenic",
    vegetarian: "vegetarian",
    lactoVegetarian: "dairy free",
    ovoVegetarian: "lacto ovo vegetarian",
    vegan: "vegan",
    pescatarian: "pescatarian",
    paleo: "paleolithic",
    primal: "primal",
    lowFODMAP: "fodmap friendly",
    whole30: "whole 30"
}
let dietsData=[];
for (const diet in dies) {
    dietsData.push(await Diet.create({name:dies[diet]}));
}
 
return dietsData
  
  const apiDiet = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiey=3967111cef7f40839688189c52001aba&addRecipeInformation=true&number=100`)).data

     
      
      let diets = apiDiet.results.map((element) => element.diets)
      
     let die =  diets.flat()

   
     

      die.forEach((diets) => { Diet.findOrCreate({where:{ name: diets },
      order:[['id','ASC']]})
      }) 

     die =   Diet.findAll({attributes: ['id','name']
  });  

  return die;

 
   
  }
  
  

 
module.exports = { allDiets};