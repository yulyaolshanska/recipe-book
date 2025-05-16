import { Link } from 'react-router-dom';

import { Recipe } from '../../types/recipe';

import styles from './RecipeCard.module.css';

type Props = {
  recipe: Recipe;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.idMeal}`} className={styles.card}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.image} />
      <h3 className={styles.title}>{recipe.strMeal}</h3>
    </Link>
  );
};

export default RecipeCard;
