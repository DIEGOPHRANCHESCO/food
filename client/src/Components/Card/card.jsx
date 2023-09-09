import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, diets, healthScore }) => {
  const getDiets = () => {
    let arrDiet = [];
    if (diets) {
      for (let diet of diets) {
        typeof diet === "object" ? arrDiet.push(diet.name) : arrDiet.push(diet);
      }
    }
    return arrDiet.length ? arrDiet.join(",") : "no hay dieta";
  };
  return (
    <>
      <Link to={`/detail/${id}`} className={style.card}>
        <div>
          <div className={style.img_recipe}>
            <img src={image} alt="recipe" />
          </div>

          <div className={style.card_info}>
            <h2 className={style.card_name}>{name}</h2>
            <h4 className={style.card_diets}>{getDiets()}</h4>

            <p>HealthScore{healthScore}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
