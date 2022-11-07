// Modules
import React from "react";

// Components
import { Outlet } from "react-router-dom";

// Style
import "./authLayout.styles.scss";

// Assets
import lendSqrLogo from "../../assets/images/lendsqr-logo.svg";
import lendSqrAuthImage from "../../assets/images/lendsqr-auth-image.svg";

// Interfaces
interface Props {
  className?: string;
}

const AuthLayout: React.FC<Props> = ({ className }) => {
  return (
    <div className={`auth-layout ${className}`}>
      <div className="auth-layout__container container">
        <header className="auth-layout__header">
          <nav className="auth-layout__nav">
            <div className="auth-layout__nav-brand">
              <img
                className="auth-layout__nav-logo"
                src={lendSqrLogo}
                alt="lendsqr logo"
              />
            </div>
          </nav>
        </header>
        <main className="auth-layout__main">
          <div className="auth-layout__left">
            <img
              className="auth-layout__photo"
              src={lendSqrAuthImage}
              alt="lendsqr auth"
            />
          </div>
          <div className="auth-layout__right">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

AuthLayout.defaultProps = {
  className: "",
};

export default AuthLayout;
