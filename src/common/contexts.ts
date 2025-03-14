import { createContext } from 'react';

export const SearchPageContext = createContext(null);

export const ThemeContext = createContext({
  current: "tailwind",
  set: null
});

export const FeaturedDatasetContext = createContext();
