// Modules
import React from "react";

// Components
import { Bars } from "react-loader-spinner";

// Style
import "./dashboardContent.styles.scss";

// Interfaces
interface Props {
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

const DashboardContent: React.FC<Props> = ({
  children,
  className,
  isLoading,
}) => {
  return (
    <div className={`dashboard-layout-content ${className}`}>
      <div className="dashboard-layout-content__container container">
        {isLoading && (
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="content loading"
            wrapperClass="dashboard-layout-content__loading"
            visible={true}
          />
        )}
        {!isLoading && children}
      </div>
    </div>
  );
};

DashboardContent.defaultProps = {
  className: "",
  isLoading: false,
};

export default DashboardContent;
