import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import RecipeList from '../../components/RecipeList/RecipeList';
import Loader from '../../components/Loader/Loader';
import { Recipe } from '../../types/recipe';
import { fetchRecipes } from '../../services/api';
import { getRecipeListTitle, getActiveFilters } from '../../utils/utils';

import styles from '../../styles/common.module.css';

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const filters = useMemo(() => getActiveFilters(searchParams), [searchParams]);
  const title = useMemo(() => getRecipeListTitle(filters), [filters]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipes(filters);
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes', error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  if (loading) return <Loader />;

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipeListPage;
