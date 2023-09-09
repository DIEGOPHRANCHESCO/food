const {
  newRecipe,
  getIdRecipe,
 
   } = require("../Controllers/controllerRecipe.js");




const getIdRecipeHandlers = async (req, res) => {
  // la fuente  es database o api ?
  const { id } = req.params;
  const source = isNaN(id) ?  'ddb': "api";
  console.log(id)
  try {
    const getId = await getIdRecipe (id, source);
    res.status(200).json(getId);
    
    
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error)
   
  }
}; 






const newRecipeHandler = async (req, res) => {
  const {name, image, summary, diets, healthScore, steps } = req.body;
  
  console.log(req.body)
  
  try {
    let response = await newRecipe(      
      name,
      image,
      summary,
      diets,
      healthScore,
      steps
    )

    res.status(200).send(response)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }

}




module.exports = {newRecipeHandler,
  getIdRecipeHandlers,
  // createRecipeHandlers
}