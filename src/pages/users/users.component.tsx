// Modules
import React from "react";

// Interfaces
interface Props {
  className?: string;
}

const Users: React.FC<Props> = ({ className }) => {
  return (
    <div className={`users ${className}`}>
      <div className="users__container">
        <h2 className="users__heading secondary-heading is-text-primary-color">
          Users
        </h2>
      </div>
    </div>
  );
};

Users.defaultProps = {
  className: "",
};

export default Users;
