export const FILTER_TYPES = {
  INGREDIENT: 'ingredient',
  COUNTRY: 'country',
  CATEGORY: 'category',
} as const;

export const FILTER_LABELS: Record<string, string> = {
  [FILTER_TYPES.INGREDIENT]: 'Recipes with',
  [FILTER_TYPES.COUNTRY]: 'Recipes from',
};

export type FilterType = (typeof FILTER_TYPES)[keyof typeof FILTER_TYPES];
export type ActiveFilters = Partial<Record<FilterType, string>>;
