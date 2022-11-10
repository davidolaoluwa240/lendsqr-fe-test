// Modules
import React from "react";
import { createPortal } from "react-dom";

// Components
import { MdClose } from "react-icons/md";
import { Input, Button, Form } from "../";

// Assets
import lsqrSearch from "../../assets/icons/lsqr-search.svg";

// Style
import "../dashboardNavbar/dashboardNavbar.styles.scss";
import "./dashboardSearch.styles.scss";

// Interfaces
interface Props {
  className?: string;
  open?: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onCloseClick?: () => void;
  handleSearch?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DashboardSearch: React.FC<Props> = ({
  className,
  open,
  onCloseClick,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  /**
   * Stop Event Propagation
   */
  const onStopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  return open
    ? createPortal(
        <div
          className={`dashboard-layout-search modal ${className}`}
          onClick={onCloseClick}
        >
          <div
            className="dashboard-layout-search__container container"
            onClick={onStopPropagation}
          >
            <MdClose
              className="dashboard-layout-search__close"
              title="close search"
              aria-label="close search modal"
              onClick={onCloseClick}
            />
            <Form
              className="dashboard-layout-search__form dashboard-layout-navbar__search-form"
              handleSubmit={handleSearch}
            >
              <Input
                className="dashboard-layout-search__control dashboard-layout-navbar__search-control"
                formGroupClass="dashboard-layout-search__group"
                type="text"
                name="search-term"
                value={searchTerm}
                placeholder="Search for anything"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="submit"
                className="dashboard-layout-search__btn dashboard-layout-navbar__search-btn btn--primary"
              >
                {/* TODO: Replace with svg sprite */}
                <img
                  className="dashboard-layout-search__btn-icon dashboard-layout-navbar__search-btn-icon"
                  src={lsqrSearch}
                  alt="search"
                />
              </Button>
            </Form>
          </div>
        </div>,
        document.querySelector("#lsqr-modal") as HTMLElement
      )
    : null;
};

DashboardSearch.defaultProps = {
  className: "",
  open: false,
};

export default DashboardSearch;
