/* import axios from "axios";


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../Redux/action";
import style from "./form.module.css";






export default function Form  ()  {
  const diets = useSelector((state) => state.diets)
  const [errors, setErrors] = useState({});
  
  const initialForm = {
    name: "",
    image: "",
  summary: "",
  diets: [],
  healthScore: "",
  steps: "",
};

const [form, setForm] = useState(initialForm);
 
const validateForm = function (form){

let errors = {};
if (!form.name) {
  errors.name = 'Type a name';
} else {
  errors.name = '';
}
if (!form.summary) {
  errors.summary = 'type a summary or descirpition';
} else {
  errors.summary='';
}
if (!form.healthScore) {
  errors.healthScore =  'healthScore is required';
}
if (!form.steps) {
  errors.steps = 'steps is required';
} else {
  errors.steps = '';
}


// if (!form.image) {
//   errors.image = 'Image is required';
// }

// if (!form.diets) {
//   errors.diets = 'diets is required';
// }

return errors;
};
useEffect(() => {
  setErrors(validateForm(form));
}, [form]);


  const dispatch = useDispatch();









useEffect(() => {
  dispatch(getDiets());
}, [dispatch]);


const changeHandler = function (even) {
  const property = even.target.name
  const value = even.target.value
  
  setForm ( {...form, [property]: value } );

};

const handlerChecked = function (event) {
  
  if (event.target.checked) {
    setForm( { ...form, diets: [...form.diets, event.target.id]
    } );
  } else {
    setForm( { 
      ...form, diets:[ ...form.diets].filter(
        (diet) => event.target.id !== diet ),
    } );
  }
};



  const submitHandler = function (event)  {
    event.preventDefault();
    if (
      !errors.name &&
      form.name &&
      !errors.summry &&
      form.summary &&
      !errors.healthScore &&
      form.healthScore &&
      !errors.steps &&
      form.steps &&
      form.diets
    ) {
      axios.post(`http://localhost:3001/recipe`, form)

      .then((recipe) => {
      
      alert("NEW RECIPE");

      setErrors(initialForm)

      document.getElementById("createRecipe").reset()

      })

    .catch((errors) => alert("ERROR") );

 

    } else {

      alert("Check your New Recipe, there is Something Wrong ");
      
    }

  };

  
  return (
    <>
    <div className={style.form_main_container}>

      <h1 className={style.form_name} > CREATE A NEW RECIPE</h1>

       <div className={style.formulario}> 

        <form onSubmit={submitHandler}>

          <div className={style.form_container}>

            <div className={style.form_left_container}>



               <div>
               
              <label htmlFor='name'>Name: </label>
              <input
                id="name"
                className={style.errors.name && "danger"}
                type="text"
                value={form.name}
                onChange={changeHandler}
                name="name"
                placeholder="Name"
                required
              />
               {errors.name && <p>{errors.name}</p>}

               </div>

              

              <div>
              <label htmlFor='summary'>summary: </label>
              <p className={style.errors.summary ? "danger" : "pass"}>
                
                {errors.summary}
              </p>

              <input
                className={style.errors.summary && "danger"}
                type="text"
                value={form.summary}
                onChange={changeHandler}
                name="summary"
                placeholder="summary"
                required
              />
              {errors.summary && <p>{errors.summary}</p>}
              </div>



              <div>
              <label htmlFor='healthScore'>healthScore: </label>
              <p className={style.errors.healthScore ? "danger" : "pass"}>
                
                {errors.healthScore}
              </p>

              <input
                type='text'
								id='healthScore'
								name='healthScore'
								value={form.healthScore}
								onChange={changeHandler}
								placeholder='Health Score'
								className={errors.healthScore && 'danger'}
                 />
                 {errors.healthScore && <p>{errors.healthScore}</p>}

              </div>





              <div>
              <label htmlFor='steps'>steps: </label>
              <p className={style.errors.steps ? "danger" : "pass"}>
              
              {errors.steps}
            </p>

            <textarea
              className={style.errors.steps && "danger"}
              type="text"
              value={form.steps}
              onChange={changeHandler}
              name="steps"
              id="steps"
              placeholder="steps"
              required
            >
              {errors.steps && <p>{errors.steps}</p>}
            
            </textarea>
          </div>
              </div>






               

            <div className={style.form_right_container}>
              <div className={style.form_diets}>
                {diets.length > 0 &&
                  diets.map((diet) => (
                    <label
                      htmlFor={diet.id
                        .toLowerCase()
                        .replace(" ", "")
                        .replace("-", "")}
                    >
                      <input
                        key={diet.id}
                        id={diet.id
                          .toLowerCase()
                          .replace(" ", "")
                          .replase("-", "")}
                        type="checkbox"
                        name={diet.name
                          .toLowerCase()
                          .replase(" ", "")
                          .replase("-", "")}
                        onChange={handlerChecked}
                      />
                      {diet.name}
                    </label>
                  ))}
              </div>
            </div>
          </div>

          <div className={style.form_butons}>
            <button
              className={style.btn_reset}
              onClick={(e) => {
                e.preventDefault();
                setForm(initialForm);
                setErrors({});
                document.getElementById("createRecipe").reset();
              }}
            >
              
              Reset
            </button>

            <button className={style.btn_create} >
              CREATE
            </button>
          </div>
        </form>
      </div>
  
</>
  );
};


 */

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../Redux/action";
import style from "./form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    image: "",
    summary: "",
    diets: "",
    healthScore: "",
    steps: "",
  });
  const [error, setError] = useState({});

  const validations = (form) => {
    const error = {};

    if (!form.name) {
      error.name = "recipe name please";
    }
    if (!form.image) {
      error.image = "enter an image for the recipe please";
    }
    if (!form.summary) {
      error.summary = "write a summary of the recipe please";
    }
    if (!form.diets) {
      error.diets = "what are the recipe diets?";
    }
    if (!form.healthScore) {
      error.healthScore = "from 0 to 100 what is the score of the recipe";
    }
    if (!form.steps) {
      error.steps = "what are the steps of the recipe?";
    }
    return error;
  };

  
  const diets = useSelector((state) => state.dietss);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  
  const handlerChecked = function (event) {
    if (event.target.checked) {
      setForm({ ...form, diets: [...form.diets, event.target.id] });
    } else {
      setForm({
        ...form,
        diets: [...form.diets].filter((diet) => event.target.id !== diet),
      });
    }
  };

  useEffect(() => {
    setError(validations(form));
  }, [form]);
  
  const submithandler = (event) => {
  
    axios.post("http://localhost:3001/recipe",form)
      .then((res) => alert("NEW RECIPE"))
      .catch((res) => alert("ERROR"));
    setError(validations(form));
  };

  const changeHandler = (even) => {
    const property = even.target.name;
    const value = even.target.value;
    setForm({ ...form, [property]: value });
  };

  return (
    <div className={style.con} >
    <div className={style.form_main_container}>
      <h1 className={style.form_name}>ESTO ES FORM</h1>
      <form onSubmit={submithandler}>
        <div className={style.form_container}>
          <div className={style.form_left_container}>
            <input
              className={style.name}
              type="text"
              onChange={changeHandler}
              name="name"
              placeholder="Name"
              required
            />
            {error.name && <p>{error.name}</p>}

            <input
              className={style.image}
              type="text"
              value={form.image}
              onChange={changeHandler}
              name="image"
              placeholder="Image"
              required
            />
            {error.image && <p>{error.image}</p>}

            <input
              className={style.summary}
              type="text"
              value={form.summary}
              onChange={changeHandler}
              name="summary"
              placeholder="Summary"
              required
            />
            {error.summary && <p>{error.summary}</p>}

            <textarea
              className={style.steps}
              type="text"
              value={form.steps}
              onChange={changeHandler}
              name="steps"
              id="steps"  
              placeholder="Steps"            
              required
            ></textarea>
            {error.steps && <p>{error.steps}</p>}

            <input
              className={style.healthScore}
              type="number"
              step="0"
              min="0"
              max="100"
              value={form.healthScore}
              onChange={changeHandler}
              name="healthScore"
              placeholder="Health Score"
              required
            />
            {error.healthScore && <p>{error.healthScore}</p>}
          </div>
          <div className={style.form_right_container}>
            <div className={style.form_diets}>
              {diets.length > 0 &&
                diets.map(diet => (
                  <label
                    htmlFor={diet.id}
                     
                     
                  >
                    <input
                      key={diet.id}
                      id={diet.id}
                      type="checkbox"
                      value={form.diets}
                      onChange={handlerChecked}
                      name={diet.name}
                    />
                    {diet.name}
                  </label>
                ))}
              {error.diets && <p>{error.diets}</p>}
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button className={style.buton}  type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
