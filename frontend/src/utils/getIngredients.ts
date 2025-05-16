import { Recipe } from '../types/recipe';

interface IngredientWithMeasure {
  ingredient: string;
  measure: string;
}

export const getIngredients = (recipe: Recipe): IngredientWithMeasure[] => {
  const ingredients: IngredientWithMeasure[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Recipe;
    const measureKey = `strMeasure${i}` as keyof Recipe;

    const ingredient = recipe[ingredientKey];
    const measure = recipe[measureKey];

    if (ingredient) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || '',
      });
    }
  }

  return ingredients;
};
