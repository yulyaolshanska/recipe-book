import { useNavigate } from 'react-router-dom';

import { Recipe } from '../../types/recipe';
import { getIngredients } from '../../utils/utils';
import { FILTER_TYPES, FilterType } from '../../constants/filters';

import styles from './RecipeDetails.module.css';

type Props = {
  recipe: Recipe;
};

const RecipeDetails: React.FC<Props> = ({ recipe }) => {
  const navigate = useNavigate();
  const { strMeal, strArea, strInstructions, strMealThumb } = recipe ?? {};
  const ingredients = getIngredients(recipe);

  const handleFilter = (type: FilterType, value: string) => {
    navigate(`/?${type}=${value}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={strMealThumb} alt={strMeal} />
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{strMeal}</h1>
          <p
            className={`${styles.link} ${styles.linkHover}`}
            onClick={() => handleFilter(FILTER_TYPES.COUNTRY, strArea)}
          >
            {strArea}
          </p>
        </div>
      </div>

      <div className={styles.instructions}>
        <h2 className={styles.instructionsTitle}>Instructions</h2>
        <p className={styles.instructionsText}>{strInstructions}</p>
      </div>

      <div className={styles.ingredients}>
        <h2 className={styles.ingredientsTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {ingredients.map((ingredient, i) => (
            <li
              key={i}
              className={`${styles.ingredientItem} ${styles.ingredientItemHover}`}
              onClick={() => handleFilter(FILTER_TYPES.INGREDIENT, ingredient!)}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
