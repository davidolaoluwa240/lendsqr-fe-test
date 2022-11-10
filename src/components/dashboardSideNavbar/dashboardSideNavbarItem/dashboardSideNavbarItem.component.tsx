// Modules
import React from "react";

// Components
import { NavLink } from "react-router-dom";

// Style
import "./dashboardSideNavbarItem.styles.scss";

// Interfaces
interface Props {
  className?: string;
  to?: string;
  icon?: string;
  name?: string;
  children?: React.ReactNode;
}

const DashboardSideNavbarItem: React.FC<Props> = ({
  className,
  to,
  icon,
  name,
  children,
}) => {
  return (
    <li className={`dashboard-layout-sidenavbar__item ${className}`}>
      {children && children}
      {!children && (
        <NavLink
          to={to as string}
          className={({ isActive }) =>
            isActive
              ? "dashboard-layout-sidenavbar__link dashboard-layout-sidenavbar__link--active"
              : "dashboard-layout-sidenavbar__link"
          }
          end
        >
          <span className="dashboard-layout-sidenavbar__link-container">
            <img
              className="dashboard-layout-sidenavbar__icon-left"
              src={icon}
              alt={name}
            />
            {name}
          </span>
        </NavLink>
      )}
    </li>
  );
};

DashboardSideNavbarItem.defaultProps = {
  className: "",
};

export default DashboardSideNavbarItem;
