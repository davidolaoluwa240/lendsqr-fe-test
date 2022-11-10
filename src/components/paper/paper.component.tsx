// Modules
import React from "react";

// Style
import "./paper.styles.scss";

// Interfaces
interface Props {
  className?: string;
  children: React.ReactNode;
}

const Paper: React.FC<Props> = ({ className, children }) => {
  return <div className={`paper ${className}`}>{children}</div>;
};

Paper.defaultProps = {
  className: "",
};

export default Paper;
