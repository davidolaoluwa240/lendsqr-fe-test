// Modules
import React from "react";
import { createPortal } from "react-dom";

// Components
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { DashboardSideNavbarItem, DashboardSideNavbarItemGroup } from "../";

// Assets
import lendsqrLogo from "../../assets/images/lendsqr-logo.svg";
import lsqrBriefcase from "../../assets/icons/lsqr-briefcase.svg";
import lsqrArrowDown from "../../assets/icons/lsqr-arrow-down.svg";

// Data
import { sideNavbarList } from "../../data";

// Style
import "./dashboardSideNavbar.styles.scss";

// Interfaces
interface Props {
  className?: string;
  open?: boolean;
  onCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSideNavbar: React.FC<Props> = ({
  className,
  open,
  onCloseModal,
}) => {
  /**
   * Close Sidebar Menu Conditionally
   */
  const handleCloseSidebarMenu = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    // Close side navbar if modal, navlink and close button is clicked
    const targetClass = target?.classList;
    const navLinkClass = target?.closest(
      ".dashboard-layout-sidenavbar__link"
    ) as HTMLElement;

    if (
      targetClass.contains("modal") ||
      targetClass?.contains("dashboard-layout-sidenavbar__close") ||
      navLinkClass?.classList?.contains("dashboard-layout-sidenavbar__link")
    ) {
      onCloseModal?.(false);
    }
  };

  // Sidebar Navigation Items Element
  const renderedNavigationItems = sideNavbarList.map((item, index) => {
    if (!item.group) {
      return (
        <DashboardSideNavbarItem
          key={index}
          to={item.to}
          icon={item.icon}
          name={item.name}
        />
      );
    } else {
      return (
        <>
          <DashboardSideNavbarItemGroup key={index} groupName={item.group} />
          {item.items.map((item, index) => {
            return (
              <DashboardSideNavbarItem
                key={index}
                to={item.to}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
        </>
      );
    }
  });

  // Dashboard Side Navbar Content
  const renderedContent = (
    <aside
      className={`dashboard-layout-sidenavbar ${className} ${
        open ? "modal" : ""
      }`}
      onClick={handleCloseSidebarMenu}
    >
      <div
        className={`dashboard-layout-sidenavbar__container  ${
          open ? "dashboard-layout-sidenavbar__container--open" : ""
        }`}
      >
        <MdClose
          className="dashboard-layout-sidenavbar__close"
          aria-label="close sidebar menu"
          title="close sidebar menu"
        />
        <div
          className={`dashboard-layout-sidenavbar__brand ${
            !open ? "d-none" : ""
          }`}
        >
          <div className="dashboard-layout-sidenavbar__brand-container">
            <Link
              to="/auth/login"
              className="dashboard-layout-sidenavbar__brand-link"
            >
              <img
                className="dashboard-layout-sidenavbar__brand-logo"
                src={lendsqrLogo}
                alt="lendsqr logo"
              />
            </Link>
          </div>
        </div>
        <ul className="dashboard-layout-sidenavbar__list">
          <DashboardSideNavbarItem className="dashboard-layout-sidenavbar__item--organization">
            <span className="dashboard-layout-sidenavbar__item-container">
              <img
                className="dashboard-layout-sidenavbar__icon-left"
                src={lsqrBriefcase}
                alt="organization"
              />
              Switch Organization
              <img
                className="dashboard-layout-sidenavbar__icon-right"
                src={lsqrArrowDown}
                alt="dropdown"
              />
            </span>
          </DashboardSideNavbarItem>
          {renderedNavigationItems}
        </ul>
      </div>
    </aside>
  );

  return open
    ? createPortal(
        renderedContent,
        document.querySelector("#lsqr-modal") as HTMLElement
      )
    : renderedContent;
};

DashboardSideNavbar.defaultProps = {
  className: "",
  open: false,
};

export default DashboardSideNavbar;
