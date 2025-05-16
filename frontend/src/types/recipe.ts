export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | null;
};

export type FetchRecipesParams = {
  ingredient?: string;
  country?: string;
  category?: string;
};
