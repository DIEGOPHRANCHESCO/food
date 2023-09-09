import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeName, getRecipes } from "../../Redux/action";
import style from './Search.module.css'

function Search({setSearch}) {
  // useSelector[(state) }=> state.getRecipeName]
  // const [nameRecipe, setnameRecipe] = useState('');
  

  const dispatch = useDispatch();


  const handlerChange = (even) => {
   
    dispatch(getRecipeName(even.target.value));

  }


  const handlerSubmit = (event) => {
    if (getRecipeName()) {
      event.preventDefault();
      // dispatch(getRecipeName());
      setSearch(true);
      // setnameRecipe('');
      
    } else {
      event.preventDefault();
      // setSearch(false);
    }
  }
  return(
    <div>
      <form onSubmit={handlerSubmit}>
        <input className={style.input_search }
        type='text'
        placeholder='SEARCH...'
        value={getRecipeName}
        onChange={handlerChange}
        />

        <button className={style.btn_search}
        type='submit'>SEARCH</button> 
      </form>
      
    </div>
  );
};

export default  Search;