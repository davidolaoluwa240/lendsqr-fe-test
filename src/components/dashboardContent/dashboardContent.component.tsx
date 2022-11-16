// Modules
import React, { useContext } from "react";

// Components
import { Bars } from "react-loader-spinner";

// Contexts
import { UIContext } from "../../contexts";

// Style
import "./dashboardContent.styles.scss";

// Interfaces
interface Props {
  className?: string;
  children: React.ReactNode;
}

const DashboardContent: React.FC<Props> = ({ children, className }) => {
  const { loading } = useContext(UIContext);

  return (
    <div className={`dashboard-layout-content ${className}`}>
      <div
        className={`dashboard-layout-content__container container ${
          loading ? "" : "d-none"
        }`}
      >
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="content loading"
          wrapperClass="dashboard-layout-content__loading"
          visible={true}
        />
      </div>

      <div
        className={`dashboard-layout-content__container container ${
          !loading ? "" : "d-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

DashboardContent.defaultProps = {
  className: "",
};

export default DashboardContent;
