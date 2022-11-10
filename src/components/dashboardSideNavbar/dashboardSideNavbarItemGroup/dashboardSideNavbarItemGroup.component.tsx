// Modules
import React from "react";

// Style
import "./dashboardSideNavbarItemGroup.styles.scss";

// Interfaces
interface Props {
  className?: string;
  groupName: string;
}

const DashboardSideNavbarItemGroup: React.FC<Props> = ({
  className,
  groupName,
}) => {
  return (
    <li className={`dashboard-layout-sidenavbar__item-group ${className}`}>
      <span className="dashboard-layout-sidenavbar__item-group-container">
        {groupName}
      </span>
    </li>
  );
};

DashboardSideNavbarItemGroup.defaultProps = {
  className: "",
};

export default DashboardSideNavbarItemGroup;
