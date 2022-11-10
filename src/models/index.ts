// Modules
import React from "react";

// UIContextType Interface
export interface IUIContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarMenuOpen: boolean;
  setIsSidebarMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// SearchContextType Interface
export interface ISearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  toggleSearchModalVisibility: () => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}
