
import{

   DETAIL_RECIPE,
    GET_RECIPE,
     GET_ALL_RECIPES,
      GET_DIETS, 
      // ADDED_BY_USER_DB,
      UPGRADE_RECIPE,
      DELETE_RECIPE,
      // SEARCH_RECIPE,
      // FILTER_CREATED,
      // FILTER_ORDER,
      // FILTER_HEALTHSCORE,
      // FILTER_DIET,
      SWITCH_LOADING,
    
    } from "./action";

const initialState = {
  recipes:[],
  dietss:[],
  getRecipeName:[],
  detailR : {},
  searchRecipe: [],
  // recipefilter: [],
  // loading: false,
  // createRecipe: [],
   
  };
  
 const rootReducer = (state = initialState, action) => {
  switch ( action.type ) {

    
 
    case UPGRADE_RECIPE:
      return { ...state }

    case DELETE_RECIPE:
      return { ...state }

    case GET_ALL_RECIPES:
      return { ...state, recipes: action.payload, };
    
    case DETAIL_RECIPE:
      return { ...state, detailR: action.payload } 
      
    case GET_RECIPE:
        return { ...state, getRecipeName: action.payload, }
        

    case GET_DIETS:
          return { ...state, dietss: action.payload, }

    /* case SEARCH_RECIPE:
      return { ...state, searchRecipe: action.payload}
      
    case FILTER_CREATED:
      const recipesCreateFilter = state.recipefilter;
      const createdfilter = payload === 'created'
      ? recipesCreateFilter.filter(recipe => recipe.created === true )
      : recipesCreateFilter.filter( recipe => recipe.created === false)
      return {
        ...state, recipes: payload === 'All' 
        ? recipesCreateFilter : createdfilter,
      };

    case FILTER_ORDER:
      const recipesNameFilter = state.recipes;
      const nameFilter = payload === 'asc'
       ? recipesNameFilter.slice().sort(function(a, b) {
         if( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
         if( b.name.toLowerCase() < a.name.toLowerCase() ) return 1;
         return 0;
       }) 
       : recipesNameFilter.slice().sort(function(a, b){
       if( a.name.toLowerCase() > b.name.toLowerCase() ) return -1;
       if( b.name.toLowerCase() > a.name.toLowerCase() ) return 1;
       return 0;
      });
       return {
        ...state, recipes: nameFilter,
       };
        
       case FILTER_HEALTHSCORE:
        const recipeHealthScorefilter = state.recipes;
        const HealthScoreFilter = payload === 'rAsc'
        ? recipeHealthScorefilter.slice().sort(function(a, b) {
          if( a.HealthScore > b.HealthScore) return -1;
          if( b.HealthScore > a.HealthScore) return 1;
          return 0;
        }) 
        :  recipeHealthScorefilter.slice().sort(function(a, b) {
          if( a.HealthScore < b.HealthScore) return -1;
          if( b.HealthScore < a.HealthScore) return 1;
          return 0;
        });
        return {
          ...state,
          recipes: HealthScoreFilter,
        };
        
        case FILTER_DIET:
          const recipesDietsFilter = state.dietsFilter
          const dietsFilter = payload === 'All'
          ? recipesDietsFilter : recipesDietsFilter.filter(recipe => recipe.diets.map( p => p.name).includes( payload ) );

          return {
            ...state,
            games: dietsFilter.length === 0 
            ? `not found recipes with the diet: ${ payload }`
            : dietsFilter
          }; */

          case SWITCH_LOADING:
            return {...state, loading: action.payload}
          
    default:
      return { ...state } 


  }

 };


 export default rootReducer; 