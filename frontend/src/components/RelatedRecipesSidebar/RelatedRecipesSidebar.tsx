import { useNavigate } from 'react-router-dom';

import { Recipe } from '../../types/recipe';

import styles from './RelatedRecipesSidebar.module.css';

type Props = {
  category: string;
  recipes: Recipe[];
};

const RelatedRecipesSidebar: React.FC<Props> = ({ category, recipes }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${encodeURIComponent(category)}`);
  };

  return (
    <aside className={styles.sidebar}>
      <h3>More {category} Recipes</h3>
      <ul className={styles.list}>
        {recipes.map(({ idMeal, strMeal }) => (
          <li key={idMeal} className={styles.item} onClick={() => handleCategoryClick(category)}>
            {strMeal}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedRecipesSidebar;
