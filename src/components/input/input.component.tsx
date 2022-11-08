// Modules
import React, { useState } from "react";

// Style
import "./input.styles.scss";

// Interfaces
interface Props {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  formGroupClass?: string;
  placeholder?: string;
  label?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  name,
  type,
  className,
  formGroupClass,
  placeholder,
  onChange,
  onBlur,
  label,
  value,
  error,
  touched,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  /**
   * Toggle Password Visibility
   */
  const onTogglePasswordVisiblity = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Render Label Element Conditionally
  const renderedLabel = label && (
    <label className="form__label" htmlFor={name}>
      {label}
    </label>
  );

  // Render Password Visibility Element Conditionally
  const renderedPasswordVisibility = type === "password" && (
    <span className="form__visibility" onClick={onTogglePasswordVisiblity}>
      {isPasswordVisible ? "HIDE" : "SHOW"}
    </span>
  );

  // Render Error Element Conditionally
  const renderedError = error && touched && (
    <div className="form__error-wrapper">
      <span className="form__error">{error}</span>
    </div>
  );

  return (
    <div className={`form__group ${formGroupClass}`}>
      {renderedLabel}
      <div className="form__control-wrapper">
        <input
          className={`form__control ${className}`}
          id={name}
          name={name}
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {renderedPasswordVisibility}
      </div>
      {renderedError}
    </div>
  );
};

Input.defaultProps = {
  className: "",
  formGroupClass: "",
  type: "text",
  placeholder: "",
  label: "",
};

export default Input;
