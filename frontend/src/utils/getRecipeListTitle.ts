import { FILTER_LABELS } from '../constants/filters';

type Filters = Record<string, string | undefined>;

export const getRecipeListTitle = (filters: Filters): string => {
  const [key, value] = Object.entries(filters).find(([, v]) => Boolean(v)) || [];

  if (!key || !value) {
    return 'All Recipes';
  }

  const label = FILTER_LABELS[key];

  return label ? `${label} ${value}` : `${value} Recipes`;
};
