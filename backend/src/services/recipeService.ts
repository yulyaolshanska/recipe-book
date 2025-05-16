import axios from 'axios';

import { BASE_URL, FilterKey } from '../constants/constants';
import { getFilteredRecipesUrl } from '../helpers/helpers';
import { FetchRecipesParams } from '../types/types';

export const fetchRecipes = async (params: FetchRecipesParams) => {
  const entries = Object.entries(params).filter(([, value]) => value !== undefined);
  const [filterKey, filterValue] = entries[0] ?? [];
  const apiUrl = getFilteredRecipesUrl(filterKey as FilterKey, filterValue);

  const response = await axios.get(apiUrl);

  return response.data.meals ?? [];
};

export const fetchRecipeById = async (id: string) => {
  const apiUrl = `${BASE_URL}/lookup.php?i=${id}`;
  const response = await axios.get(apiUrl);

  return response.data.meals ? response.data.meals[0] : null;
};
