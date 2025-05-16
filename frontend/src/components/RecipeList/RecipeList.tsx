import { Recipe } from '../../types/recipe';
import RecipeCard from '../RecipeCard/RecipeCard';

import styles from './RecipeList.module.css';

type Props = {
  recipes: Recipe[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <div className={styles.list}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
