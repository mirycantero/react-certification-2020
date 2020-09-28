import React, { useContext, useState } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchContext!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [query, setQuery] = useState('Wizeline');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
