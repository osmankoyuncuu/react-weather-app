import { createContext, useContext, useState } from "react";

const SearchTextContext = createContext();

export const SearchTextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
};

export const useSearchText = () => useContext(SearchTextContext);
