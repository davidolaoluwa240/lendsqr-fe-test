// Modules
import React, { useContext, useEffect } from "react";

// Components
import { UserStats, UserTable } from "../../components";

// Contexts
import { UserContext } from "../../contexts";

// Style
import "./users.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const Users: React.FC<Props> = ({ className }) => {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={`users ${className}`}>
      <div className="users__container">
        <h2 className="users__heading secondary-heading is-text-primary-color">
          Users
        </h2>
        {/* User Stats */}
        <UserStats className="users__stats" />
        {/* User Table */}
        <UserTable className="users__table" />
      </div>
    </div>
  );
};

Users.defaultProps = {
  className: "",
};

export default Users;
