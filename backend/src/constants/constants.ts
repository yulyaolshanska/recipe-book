export const FILTER_PARAM_KEYS = {
  ingredient: 'i',
  country: 'a',
  category: 'c',
} as const;

export type FilterKey = keyof typeof FILTER_PARAM_KEYS;

export const BASE_URL = process.env.RECIPE_API_BASE_URL;
