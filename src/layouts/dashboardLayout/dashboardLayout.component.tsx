// Modules
import React, { useContext } from "react";

// Contexts
import { SearchContext, UIContext } from "../../contexts";

// Components
import {
  DashboardNavbar,
  DashboardSearch,
  DashboardSideNavbar,
} from "../../components";

// Interfaces
interface Props {
  className?: string;
}

const DashboardLayout: React.FC<Props> = ({ className }) => {
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    open,
    toggleSearchModalVisibility,
  } = useContext(SearchContext);

  const { isSidebarMenuOpen, setIsSidebarMenuOpen } = useContext(UIContext);

  return (
    <div className={`dashboard-layout ${className}`}>
      <div className="dashboard-layout__container">
        <DashboardSearch
          className="dashboard-layout__search"
          open={open}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          onCloseClick={toggleSearchModalVisibility}
        />
        <header className="dashboard-layout__header">
          <DashboardNavbar className="dashboard-layout__navbar" />
        </header>
        <main className="dashboard-layout__main">
          <DashboardSideNavbar
            className="dashboard-layout__sidenavbar"
            open={isSidebarMenuOpen}
            onCloseModal={setIsSidebarMenuOpen}
          />
        </main>
      </div>
    </div>
  );
};

DashboardLayout.defaultProps = {
  className: "",
};

export default DashboardLayout;
