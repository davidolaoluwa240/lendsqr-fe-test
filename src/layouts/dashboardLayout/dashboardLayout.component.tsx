// Modules
import React from "react";

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
  return (
    <div className={`dashboard-layout ${className}`}>
      <div className="dashboard-layout__container">
        <DashboardSearch
          className="dashboard-layout__search"
          open={false}
          searchTerm=""
          setSearchTerm={() => undefined}
        />
        <header className="dashboard-layout__header">
          <DashboardNavbar className="dashboard-layout__navbar" />
        </header>
        <main className="dashboard-layout__main">
          <DashboardSideNavbar className="dashboard-layout__sidenavbar" />
        </main>
      </div>
    </div>
  );
};

DashboardLayout.defaultProps = {
  className: "",
};

export default DashboardLayout;
