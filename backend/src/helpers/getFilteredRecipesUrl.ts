import { BASE_URL, FILTER_PARAM_KEYS, FilterKey } from '../constants/constants';

export const getFilteredRecipesUrl = (filterKey?: FilterKey, filterValue?: string): string => {
  if (filterKey && filterValue) {
    const param = FILTER_PARAM_KEYS[filterKey];

    return `${BASE_URL}/filter.php?${param}=${encodeURIComponent(filterValue)}`;
  }

  return `${BASE_URL}/search.php?s=`;
};
