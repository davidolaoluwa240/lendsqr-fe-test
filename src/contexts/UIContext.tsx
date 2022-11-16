// Modules
import React, { createContext, useState } from "react";

// Models
import { IUIContextType } from "../models";

// Interfaces
interface Props {
  children: React.ReactNode;
}

// UI Context
export const UIContext = createContext<IUIContextType>({
  loading: false,
  isSidebarMenuOpen: false,
  setLoading: () => {},
  setIsSidebarMenuOpen: () => {},
});

// UI Provider
export const UIProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState<boolean>(false);

  return (
    <UIContext.Provider
      value={{
        isSidebarMenuOpen,
        setIsSidebarMenuOpen,
        loading,
        setLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
