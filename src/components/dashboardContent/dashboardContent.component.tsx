// Modules
import React from "react";

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
      dashboardContent.component
    </div>
  );
};

DashboardContent.defaultProps = {
  className: "",
  isLoading: false,
};

export default DashboardContent;
