import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, switchLoading} from "../../Redux/action";
import Card from "../../Components/Card/card.jsx";
import Search from "../../Components/Search/Search.jsx";
import style from './home.module.css'
import notFound from '../../image/notFound.png'
// import loading  from '../../image/loading.png'

function Home() {

  const dispatch = useDispatch();
  const searchRecipes = useSelector((state) => state.getRecipeName);
  const allRecipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [orderedRecipe, setOrderedRecipe] = useState([]);

  //  INIT
 
  useEffect(() => {
    dispatch(getRecipes());
    setTimeout(() => {
      dispatch(switchLoading(false));
    }, 1000);
  }, [dispatch]);

  // BUSQUEDA
  useEffect(() => {
    setOrderedRecipe([]);
    setFilteredRecipe([]);
    setOffset(0);
    setPage(1);
    if (search) {
      setTimeout(() => {
        dispatch(switchLoading(false));
      }, 100);
    }
  }, [dispatch, search, searchRecipes]);

  // FILTROS
  const filterDiets = function (recipe) {
    let arrDiets = [];

    if (recipe.diets) {
      for (let diet of recipe.diets) {
        typeof diet === "object"
          ? arrDiets.push(diet.name.toLowerCase())
          : arrDiets.push(diet.toLowerCase());
      }
    }

    if (recipe.vegetarian) {
      arrDiets.push("vegetarian");
    }
    return arrDiets;
  };

  useEffect(() => {
    setSearch(false);
    setOffset(0);
    setPage(1);
    if (filter) {
      let filterRecipe = [...allRecipes].filter((recipe) => {
        return (
          filterDiets(recipe) &&
          filterDiets(recipe).includes(filter.toLocaleLowerCase())
        );
      });
      filterRecipe.length && setFilteredRecipe(filterRecipe);
    } else {
      setFilteredRecipe([]);
    }
  }, [filter, allRecipes]);

  //  ORDENAMIENTO

  

  function handlerSort(event) {
    if (filteredRecipe.length) {
      if (event.target.value === "asc") {
        const asc = [...filteredRecipe].sort((a, b) => {
          return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : -1;
        });

        setFilteredRecipe(asc);
      }

      if (event.target.value === "des") {
        const des = [...filteredRecipe].sort((a, b) => {
          return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
            ? 1
            : -1;
        });
        setFilteredRecipe(des);
      }

      if (event.target.value === "high") {
        const high = [...filteredRecipe].sort((a, b) => {
          return ( a.healthScore) < ( b.healthScore)
            ? 1
            : -1;
        });

        setFilteredRecipe(high);
      }
     
      if (event.target.value ==='setenta') {
         [...filteredRecipe].filter((a) => a.healthScore > 70);
       
      }

      if (event.target.value === "low") {
        const low = [...filteredRecipe].sort((a, b) => {
          return ( a.healthScore) > ( b.healthScore)
            ? 1
            : -1;
        });
        setFilteredRecipe(low);
      }
    } else if (searchRecipes.length && search) {
      if (event.target.value === "asc") {
        const asc = [...searchRecipes].sort((a, b) => {
          return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : -1;
        });

        setRecipes(asc);
      }
      if (event.target.value === "des") {
        const des = [...searchRecipes].sort((a, b) => {
          return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
            ? 1
            : -1;
        });
        setRecipes(des);
      }
      if (event.target.value === "high") {
        const high = [...searchRecipes].sort((a, b) => {
          return ( a.healthScore) < ( b.healthScore)
            ? 1
            : -1;
        });
        setRecipes(high);
      }
      if (event.target.value === "low") {
        const low = [...searchRecipes].sort((a, b) => {
          return ( a.healthScore) > (b.healthScore)
            ? 1
            : -1;
        });
        setRecipes(low);
      }
    } else {
      if (event.target.value === "asc") {
        const asc = [...allRecipes].sort((a, b) => {
          return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : -1;
        });
        setOrderedRecipe(asc);
      }
      if (event.target.value === "des") {
        const des = [...allRecipes].sort((a, b) => {
          return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
            ? 1
            : -1;
        });
        setOrderedRecipe(des);
      }
      if (event.target.value === "high") {
        const high = [...allRecipes].sort((a, b) => {
          return ( a.healthScore) < ( b.healthScore)
            ? 1
            : -1;
        });
        setOrderedRecipe(high);
      }
      if (event.target.value === "low") {
        const low = [...allRecipes].sort((a, b) => {
          return ( a.healthScore) > ( b.healthScore)
            ? 1 : -1;
        });
        setOrderedRecipe(low);
      }
    }
  }
  // PAGINADO
  

  const numRecipes = 9;
  const maxPage = filteredRecipe.length
  ? Math.ceil(filteredRecipe.length / numRecipes)
  : searchRecipes.length
  ? Math.ceil(searchRecipes.length / numRecipes)
  : Math.ceil(allRecipes.length / numRecipes)

  
  const next = function () {
    if (page < maxPage) {
      setOffset(offset + numRecipes);
      setPage(page +1);
    }
  };

const previous = function() {
  if ( page > 1) {
    setOffset(offset - numRecipes);
    setPage( page -1)
  }
}

useEffect(() => {
  if (search) {
    if (searchRecipes) {
      let pageRecipes = [...searchRecipes].slice(
        offset,
        offset + numRecipes
      );
      setRecipes(pageRecipes);
    }

  } else {
    if(filteredRecipe.length) {
      let pageRecipes = [...filteredRecipe].slice(
        offset,
        offset + numRecipes
      );
      setRecipes(pageRecipes);
    } else if ( orderedRecipe.length) {
      let pageRecipes = [...orderedRecipe].splice(
        offset,
        offset + numRecipes
      );
      setRecipes(pageRecipes);
    } else {
      let pageRecipes = [...allRecipes].slice(
        offset,
        offset + numRecipes
      );
      setRecipes(pageRecipes);
    }
  }
},[
allRecipes,
filteredRecipe,
orderedRecipe,
searchRecipes,
page,
offset,
search
]);


return(
  <>
  <div >

    <div>
    <h1>bien</h1>

     
    <div className={style.filter_sort} >

      <div>

       <span>sort</span>
       <select onChange={handlerSort} > 
       <option defaultValue= '' ></option>
       <option value='asc'> A-Z </option>
       <option value='des'> Z-A </option>
       </select>

       <span>Order</span>
       <select onChange={handlerSort} >
        <option defaultValue=''></option>
        <option value='high'> high</option>
        <option value='low' >low</option>
        <option value='setenta'>+60</option>
       </select>


       <span> filter by diet </span>
       <select className={style.filter_select} 
       onChange={(event) => setFilter(event.target.value)}
       >
        <option defaultValue='' > all</option>
        <option value='gluten free' >gluten free</option>
        <option value='dairy free' > ketocojenic</option>
        <option value='vegetarian' > vegetarian </option>
        <option value='lacto ovo' > ovo vegetarian</option>
        <option value='vegan' > vegan</option>
        <option value='pescatarian' >pescatarian </option>
        <option value='paleolithic' > pale </option>
        <option value='primal' >primal </option>
        <option value='whole 30' > whole 30</option>

       </select>



      </div>

  <div> 
    <Search setSearch={setSearch} />
    </div>
    </div>


    </div>
  </div>
   <div className={style.recipe_home} >
    {loading ? (
      <div>
        <img className={style.Loading}
							src={loading}
							alt='loading' />
      </div>      
    ): recipes.length > 0 ? ([...recipes].map((recipe) => (
      <Card
       key={recipe.id}
       id={recipe.id}
       name={recipe.name}
       image={recipe.image}
       diets={recipe.diets}
       healthScore={recipe.healthScore}
       />

    ))
    ) : (
      <div>
        <img className={style.not_found}
        src={notFound}
        alt='no found' />

        <h1 className={style.not_found_text} > </h1>
        <button 
        className={style.bnt_not_found} onClick={(eve) => {setSearch(''); setFilteredRecipe(eve, 'empty')}} > Try Again </button> 
      </div>
    ) }

   </div>

   <div className={style.pagination}>
    <button className={style.btn_page} onClick={previous} >
      previous
    </button>

    <span className={style.num_page}> {page}</span>
    <button className={style.btn_page} onClick={next} >next</button>

   </div>
  </>
)

}

export default Home;

