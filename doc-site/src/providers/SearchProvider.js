import {createContext, useContext} from 'react';

const SearchContext = createContext('');

export const useSearchTerms = () => {
  return useContext(SearchContext).split(' ');
};

export const SearchProvider = SearchContext.Provider;
