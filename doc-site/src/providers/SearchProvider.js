import {createContext, useContext} from 'react';

const SearchContext = createContext();

export const useSearchTerm = () => {
  return useContext(SearchContext);
}

export const SearchProvider = SearchContext.Provider;
