// Modules
import React from "react";

// Style
import "./paper.styles.scss";

// Interfaces
interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Paper: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <div className={`paper ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

Paper.defaultProps = {
  className: "",
};

export default Paper;
