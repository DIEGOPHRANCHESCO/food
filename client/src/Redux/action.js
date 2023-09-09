import axios from 'axios';



export const GET_RECIPE = 'GET_RECIPE'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const DETAIL_RECIPE = 'DETAIL_RECIPE';
export const GET_DIETS = 'GET_DIETS';
export const SEARCH_RECIPE = 'SEARCH_RECIPE'
export const ADDED_BY_USER_DB = 'ADDED_BY_USER_DB'
export const UPGRADE_RECIPE   = 'UPGRADE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE'

export const FILTER_CREATED = ' FILTER_CREATED'
export const FILTER_ORDER = 'FILTER_ORDER'
export const FILTER_HEALTHSCORE = 'FILTER_HEALTHSCORE'
export const FILTER_DIET = 'FILTER_DIET'

export const SWITCH_LOADING = 'SWITCH_LOADING'
/* 

export const createRecipe = (form ) => {
  return  async function ( dispatch ) {
    try {
      await axios.post('http://localhost:3001/recipe',form);
      return dispatch({type: ADDED_BY_USER_DB,})
    } catch (error) {
      console.log(error)
      alert(`${ form.name } recipe ya existe `)
    }
  }
};

 */



export const searchRecipes = ( name ) => {
  return async function( dispatch ) {
    try {
      const recipes = await axios.get(`http://localhost:3001/recipes/?name=${name}`)
      return dispatch({
        type: SEARCH_RECIPE, payload: recipes.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}



export const updateRecipe = (id, recipe ) => {
  const update = async ( dispatch ) => {
    try {
      await axios.put(`http://localhost:3001/recipe/${id}`)
      alert(`${recipe.name} listo actualizado `)
      return dispatch({type:  UPGRADE_RECIPE ,
      })
    } catch (error) {
      console.log(error);
      alert( `${recipe.name} la receta no se actualizo` )
    }
  }
  return update
};


export const deleteRecipe = ( id ) => {
  return async function ( dispatch ) {
    try {
      await axios.delete(`http://localhost:3001/recipe/${id}`)
      return dispatch({ type: DELETE_RECIPE})
      
    } catch (error) {
      console.log(error)
      alert('no se elimino la receta')      
    }
  }
};



/* 
export const create = () => {
  return async function (dispatch) {
    try {
      let data = await axios.get('http://localhost:3001/recipes');
      return dispatch({ type: ADDED_BY_USER_DB , payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
 */

export const getRecipes = () => {
  
 try {
  return  async function(dispatch){
    const apiRecipes = await axios.get('http://localhost:3001/recipes');
    
    const recipes = apiRecipes.data;
    dispatch({ type: GET_ALL_RECIPES, payload: recipes })
    
  };
  
 } catch (error) {
  alert('Error Sorry')
  
 }
}; 


export const getRecipeName = (name) => {
  try {
    return async function (dispatch) {
      const apiData = await axios.get(
        `http://localhost:3001/recipes/?name=${name}`);
        const recipeName = apiData.data;
        dispatch({ type: GET_RECIPE, payload: recipeName }); 
      };
  } catch (error) {
    alert('Oops not Recipe')
    
  }
    
  };
  
  
  
  export const detailRecipe = (id) => {
    
    try {
      return function (dispatch)  {
        const  apiRecipe =  axios.get(`http://localhost:3001/recipe/${id}`)
       
        const recipe = apiRecipe.data;
        dispatch({type: DETAIL_RECIPE, payload: recipe})
      }
    } catch (error) {
      alert('Not Detail Recipe')
      
    }
    

   
  
  };


export const getDiets = () => {

  try { 
  
  return async function (dispatch) {
    const alldiets = await axios.get('http://localhost:3001/diets');
    const diets = alldiets.data;
    dispatch({type: GET_DIETS, payload: diets })
  }
} catch (error) {
  alert('Excuseme Not Diets')
  
}
}


/* export const filterCreate = ( payload ) => {
  return { 
    type: FILTER_CREATED,
    payload
  }
};


export const filterOrdered = ( payload) => {
  return {
    type: FILTER_ORDER,
    payload
  }
};


export const filterHealthScore = (payload) => {
  return {
    type: FILTER_HEALTHSCORE,
    payload
  }
};


export const filterDiet = ( payload ) => {
  return {
    type: FILTER_DIET,
    payload
  }
};  */

export function switchLoading(event) {
  return (dispatch) => {
      dispatch({ type: SWITCH_LOADING, payload: event })
  }
}