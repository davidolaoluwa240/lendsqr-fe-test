// Modules
import React, { useContext } from "react";

// Contexts
import { SearchContext } from "../../contexts";

// Components
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { Input, Button, Form } from "../";

// Assets
import lendsqrLogo from "../../assets/images/lendsqr-logo.svg";
import tempUser from "../../assets/images/temp-user.svg";
import lsqrSearch from "../../assets/icons/lsqr-search.svg";
import lsqrNotificationBell from "../../assets/icons/lsqr-notification-bell.svg";
import lsqrArrowDownAlt from "../../assets/icons/lsqr-arrow-down-alt.svg";

// Style
import "./dashboardNavbar.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const DashboardNavbar: React.FC<Props> = ({ className }) => {
  const {
    searchTerm,
    setSearchTerm,
    toggleSearchModalVisibility,
    handleSearch,
  } = useContext(SearchContext);

  return (
    <nav className={`dashboard-layout-navbar ${className}`}>
      <div className="dashboard-layout-navbar__container container">
        <div className="dashboard-layout-navbar__brand">
          <MdOutlineMenu
            className="dashboard-layout-navbar__menu-icon"
            aria-label="toggle side navigation"
            onClick={toggleSearchModalVisibility}
          />
          <img
            className="dashboard-layout-navbar__brand-logo"
            src={lendsqrLogo}
            alt="lendsqr logo"
          />
        </div>
        <div className="dashboard-layout-navbar__search">
          <Form
            className="dashboard-layout-navbar__search-form"
            handleSubmit={handleSearch}
          >
            <Input
              className="dashboard-layout-navbar__search-control"
              name="dashboard-navbar-search"
              value={searchTerm}
              placeholder="Search for anything"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="submit"
              className="dashboard-layout-navbar__search-btn btn--primary"
            >
              <img
                className="dashboard-layout-navbar__search-btn-icon"
                src={lsqrSearch}
                alt="search"
              />
            </Button>
          </Form>
        </div>
        <div className="dashboard-layout-navbar__nav">
          <Link
            to="/dashboard/users"
            className="dashboard-layout-navbar__nav-link"
          >
            Docs
          </Link>
          {/* TODO: Replace with svg sprite */}
          <img
            className="dashboard-layout-navbar__nav-icon dashboard-layout-navbar__nav-icon--notification"
            src={lsqrNotificationBell}
            alt="notification"
          />
          <img
            className="dashboard-layout-navbar__nav-icon dashboard-layout-navbar__nav-icon--search"
            src={lsqrSearch}
            alt="search"
          />
          <div className="dashboard-layout-navbar__nav-user">
            <img
              src={tempUser}
              className="dashboard-layout-navbar__nav-user-photo"
              alt="user name"
            />
            <span className="dashboard-layout-navbar__nav-user-name">
              Adedeji
            </span>
            {/* TODO: Replace with svg sprite */}
            <img
              className="dashboard-layout-navbar__nav-user-icon"
              src={lsqrArrowDownAlt}
              alt="arrow down alt"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

DashboardNavbar.defaultProps = {
  className: "",
};

export default DashboardNavbar;
