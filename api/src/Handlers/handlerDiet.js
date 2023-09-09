const { allDiets } = require ('../Controllers/controllerDiets')
const { Diet } = require ('../db')

const getDietshandler = async(req, res) => {
  
  try {
    let diets = await allDiets()    
    res.status(200).json(diets)
  
  } catch (error) {
     
  res.status(400).json({error: error.message})
      
    
    
  }
  
}




module.exports = {getDietshandler}