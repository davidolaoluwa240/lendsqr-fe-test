// Modules
import React from "react";

// Style
import "../input/input.styles.scss";

// Interfaces
export interface IOptionType {
  key: string | number;
  label: string | number;
}

interface Props {
  className?: string;
  formGroupClass?: string;
  label?: string;
  name: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  options: IOptionType[];
}

const InputSelect: React.FC<Props> = ({
  label,
  name,
  onChange,
  onBlur,
  value,
  error,
  touched,
  options,
  className,
  formGroupClass,
}) => {
  // Render Select Options
  const renderedOptions = options.map(({ key, label }) => {
    return (
      <option className="form__control-option" key={key} value={label}>
        {label}
      </option>
    );
  });

  // Render Label Element Conditionally
  const renderedLabel = label && (
    <label className="form__label" htmlFor={name}>
      {label}
    </label>
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
      <select
        className={`form__control form__control--select ${className}`}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {renderedOptions}
      </select>
      {renderedError}
    </div>
  );
};

InputSelect.defaultProps = {
  className: "",
  formGroupClass: "",
  label: "",
};

export default InputSelect;
