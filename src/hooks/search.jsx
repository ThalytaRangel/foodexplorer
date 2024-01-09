import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({});

function useSearch() {
  const context = useContext(SearchContext);

  return context;
}

function SearchProvider({ children }) {
  const [data, setData] = useState({});

  function setSearch(query = "test") {
    setData({ search: query });
  }

  return (
    <SearchContext.Provider value={{ setSearch, search: data.seacher }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchProvider, useSearch };
