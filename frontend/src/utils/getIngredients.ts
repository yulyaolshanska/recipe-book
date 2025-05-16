import { Recipe } from '../types/recipe';

export const getIngredients = (recipe: Recipe): string[] => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const key = `strIngredient${i}` as keyof Recipe;
    const raw = recipe[key];

    const trimmed = raw?.trim();
    if (trimmed) {
      ingredients.push(trimmed);
    }
  }

  return ingredients;
};
