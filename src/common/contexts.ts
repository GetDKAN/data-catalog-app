import { createContext } from 'react';
import { UseSearchAPIResult } from '@civicactions/data-catalog-components';

export const SearchPageContext = createContext<UseSearchAPIResult>({
  data: {
    facets: [], results: {}, total: "",
  },
  searchParams: {
    value: {},
    set: () => ({}),
    default: {},
  },
  pageSize: {
    value: undefined,
    set: () => ({})
  },
  page: {
    value: undefined,
    set: () => ({})
  },
  fulltext: {
    value: undefined,
    set: () => ({})
  },
  sort: {
    value: undefined,
    set: () => ({})
  },
  facets: {
    value: [],
    set: () => ({})
  },
  sortOrder: {
    value: undefined,
    set: () => ({})
  },
  status: undefined,
  error: undefined
});

export const ThemeContext = createContext({
  current: "tailwind",
  set: null
});

export const FeaturedDatasetContext = createContext(null);
