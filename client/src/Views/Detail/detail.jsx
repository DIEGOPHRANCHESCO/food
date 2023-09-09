import { useState } from "react";
import { React, useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailRecipe } from "../../Redux/action";
import style from './detail.module.css'
// import loading from '../../image/loading.png'



function Detail  ()  {
  const {id} = useParams()
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.detailR );
  
  const [loading, setLoading] = useState(false)
  console.log(recipe)
  useEffect(() => {
    dispatch(detailRecipe(id));
    setTimeout(() => {
      setLoading(false);
    },0);

  },[dispatch,id]);
  
  
  return(

    
    <div className={style.main_container} >
       <div>
      <h1>ESTO ES DETAIL</h1>
    </div>
    {loading ? (<div>
      <img className={style.loading}
      src={loading}
      alt='loading'
      />
    </div>
     )  : recipe.name ? (
       <> 
      <h1 className={style.name} >{recipe.name}</h1>

        <div className={style.detail_containser} >

         <div className={style.left_container} >
          <img src={recipe.image} alt='' />

          <div className={style.detail_points} >

            <h1>
              { `${recipe.healthScore}%`}
            </h1>

            <h1> HEALTHY</h1>

          </div>


        </div>

        <div className={style.right_container} >

          {/* <h2>{recipe.summary && 'summary'}</h2> */}

          <div className={style.detail_summary} >          
              {/* { recipe.summary} */}
         </div>

         
          
        </div>

      </div>
      </>      
      
      ) : (
       <h1> Something went wrong, please try again! </h1>
       )
      }
    </div>
     
     )
    }
    
    export default Detail;  
    
    /* function Detail () {
    const {id} = useParams();
    const dispatch = useDispatch();  
    const  recipe = useSelector((state) => state.detail);  
    useEffect(() => { 
      dispatch(detailRecipe(id));
      },[dispatch, id]);
      
      return(
        <div>
         <div>
           <img scr={recipe.image} alt='error' /> 
        </div>
    
        <div>
          {recipe.name && 
          recipe.summary && 
          recipe.healtScore && 
          recipe.diets &&
          recipe.steps ? (
            <div>
              {
                <p>
                  <strong>name</strong> :{recipe.name}
                </p>
              }
              {<p>{recipe.summary}</p>}
              {
                <p>
                  <strong>diets</strong>4{`${recipe.diets.join(',')}`}
                </p>
              }
              {
               <p>
                 <strong>healthScore</strong> {recipe.healthScore}
               </p>
              }
            </div>
          ) : (
            <h1>MOMEN PLEASE...</h1>
            
            )
           }
       
        
        </div>
      
       </div>
      )
    }
    export default Detail;
    
    console.log(Detail)
    */