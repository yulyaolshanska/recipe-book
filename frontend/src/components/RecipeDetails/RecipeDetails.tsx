import { Link } from 'react-router-dom';

import { Recipe } from '../../types/recipe';
import { getIngredients } from '../../utils/utils';
import { FILTER_TYPES } from '../../constants/filters';

import styles from './RecipeDetails.module.css';

type Props = {
  recipe: Recipe;
};

const RecipeDetails: React.FC<Props> = ({ recipe }) => {
  const { strMeal, strArea, strInstructions, strMealThumb } = recipe ?? {};
  const ingredients = getIngredients(recipe);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={strMealThumb} alt={strMeal} />
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{strMeal}</h1>
          <Link
            to={`/?${FILTER_TYPES.COUNTRY}=${encodeURIComponent(strArea)}`}
            className={`${styles.link} ${styles.linkHover}`}
          >
            {strArea}
          </Link>
        </div>
      </div>

      <div className={styles.instructions}>
        <h2 className={styles.instructionsTitle}>Instructions</h2>
        <p className={styles.instructionsText}>{strInstructions}</p>
      </div>

      <div className={styles.ingredients}>
        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {ingredients.map(({ ingredient, measure }, i) => (
            <li key={i} className={styles.ingredientItem}>
              <Link
                to={`/?${FILTER_TYPES.INGREDIENT}=${encodeURIComponent(ingredient)}`}
                className={styles.ingredientItemHover}
              >
                {`${ingredient} - ${measure}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
