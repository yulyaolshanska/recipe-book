import { ActiveFilters, FILTER_TYPES } from '../constants/filters';

export const getActiveFilters = (searchParams: URLSearchParams): ActiveFilters => {
  return Object.values(FILTER_TYPES).reduce<ActiveFilters>((acc, key) => {
    const value = searchParams.get(key);

    if (value) {
      acc[key] = value;
    }

    return acc;
  }, {});
};
