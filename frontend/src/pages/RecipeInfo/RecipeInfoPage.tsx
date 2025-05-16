import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';
import RelatedRecipesSidebar from '../../components/RelatedRecipesSidebar/RelatedRecipesSidebar';
import { fetchRecipeById, fetchRecipes } from '../../services/api';
import { Recipe } from '../../types/recipe';
import Loader from '../../components/Loader/Loader';

import styles from '../../styles/common.module.css';

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [relatedRecipes, setRelatedRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);

        if (data?.strCategory) {
          const relatedData = await fetchRecipes({ category: data.strCategory });
          setRelatedRecipes(relatedData);
        }
      } catch (error) {
        console.error('Failed to fetch recipe or related recipes', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Loader />;

  return recipe ? (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <RecipeDetails recipe={recipe} />
        <RelatedRecipesSidebar category={recipe.strCategory} recipes={relatedRecipes} />
      </div>
    </div>
  ) : (
    <p>Recipe not found</p>
  );
};

export default RecipeDetailsPage;
