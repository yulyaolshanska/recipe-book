import axios from 'axios';

import { FetchRecipesParams, Recipe } from '../types/recipe';
import { BASE_URL } from '../constants/constants';

export const fetchRecipes = async (params: FetchRecipesParams): Promise<Recipe[]> => {
  const res = await axios.get(BASE_URL, { params });

  return res.data ?? [];
};

export const fetchRecipeById = async (id: string): Promise<Recipe> => {
  const res = await axios.get(`${BASE_URL}/${id}`);

  return res.data;
};
