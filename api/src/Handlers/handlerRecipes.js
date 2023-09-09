
const {
  // getIdRecipe,
  getAllApiRecipe, 
  searchRecipeByname,
  updateRecipe,
  deleteId
} = require("../Controllers/controllerRecipes.js");



 




const getIdRecipeHandlers = async (req, res) => {
  // la fuente  es database o api ?
  const { id } = req.params;
  const source = isNaN(id) ?  'ddb': "api";
  console.log(id)
  try {
    const getId = await getIdRecipe(id, source);
    res.status(200).json(getId);
    
    
  } catch (error) {
    res.status(400).json({ error: error.message });
   
  }
}; 


const getAllRecipesHandlers = async (req, res) => {
  try {
    const { name } = req.query;
    let recipes = []
     recipes = name
      ? await searchRecipeByname(name)
      : await getAllApiRecipe()

    res.status(200).json(recipes);
   
  } catch (error) {

    res.status(400).send({ error: error.message });
  }
};



const putRecipeIdHandlers = async (req, res) => {
  const { id } = req.params;
  let { name, image, summary, diets, healthScore,  steps } = req.body;
  try {
    const response = await updateRecipe(id, name, image, summary, diets, healthScore,  steps);
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error:error.message});
    
  }

}






const deleteRecipeIdHandlers = async (req, res) => {
  const { id }  = req.params;
  try {
    const  elimiD = await deleteId( id ) 

    if(!elimiD)throw new Error('id no exixte')
    res.status(200).json(elimiD )

  } catch (error) {
    res.status(400).json({error:error.message})    
  }
}

 




module.exports = {
  // getIdRecipeHandlers,
  getAllRecipesHandlers,
  // createRecipeHandlers,
  deleteRecipeIdHandlers,
  putRecipeIdHandlers
};
