// Modules
import React from "react";

// Components
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

// Style
import "./button.styles.scss";

// Interfaces
interface Props {
  className?: string;
  children: React.ReactNode;
  to?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

const Button: React.FC<Props> = ({
  className,
  children,
  to,
  type,
  disabled,
  isLoading,
  onClick,
}) => {
  // Detemine The Type Content To Render Based On Loading State
  const buttonContent = isLoading ? (
    <ThreeDots
      height="26"
      width="40"
      radius="9"
      color="#fff"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      ariaLabel="content loading"
      visible={true}
    />
  ) : (
    children
  );

  // Render Link Component When (to) Is Specified
  if (to)
    return (
      <Link to={to} className={`btn ${className}`} onClick={onClick}>
        {buttonContent}
      </Link>
    );

  // Render Button Element When (to) Isn't Specified
  return (
    <button
      type={type}
      className={`btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  type: "button",
  disabled: false,
  isLoading: false,
};

export default Button;
