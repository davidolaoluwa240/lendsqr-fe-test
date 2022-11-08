// Modules
import React from "react";

// Assets
import lendsqrLogo from "../../assets/images/lendsqr-logo.svg";

// Component
import { Button } from "../../components";

// Style
import "./pageNotFound.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const PageNotFound: React.FC<Props> = ({ className }) => {
  return (
    <div className={`page-not-found ${className}`}>
      <div className="page-not-found__container container">
        <img
          className="page-not-found__brand"
          src={lendsqrLogo}
          alt="lendsqr logo"
        />
        <h1 className="page-not-found__heading">Page not found</h1>
        <Button
          to="/dashboard/users"
          className="page-not-found__btn btn--primary btn--sm is-width-full"
        >
          Go To Users
        </Button>
      </div>
    </div>
  );
};

PageNotFound.defaultProps = {
  className: "",
};

export default PageNotFound;
