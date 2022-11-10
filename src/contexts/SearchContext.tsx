// Modules
import React, { createContext, useState } from "react";

// Models
import { ISearchContextType } from "../models";

// Interfaces
interface Props {
  children: React.ReactNode;
}

// Search Context
export const SearchContext = createContext<ISearchContextType>({
  searchTerm: "",
  open: false,
  setSearchTerm: () => {},
  handleSearch: () => {},
  toggleSearchModalVisibility: () => {},
});

// Search Provider
export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  /**
   * Toggle Search Modal Visibility
   */
  const toggleSearchModalVisibility = () => {
    setOpen(!open);
  };

  /**
   * Search Handler
   */
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform Searching here
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        open,
        toggleSearchModalVisibility,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
