// Modules
import React, { FormEvent } from "react";

// Interfaces
interface Props {
  className?: string;
  children: React.ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({ className, handleSubmit, children }) => {
  return (
    <form
      autoComplete="off"
      className={`form ${className}`}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

Form.defaultProps = {
  className: "",
};

export default Form;
