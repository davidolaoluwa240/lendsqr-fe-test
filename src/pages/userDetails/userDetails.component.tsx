// Modules
import React, { useContext, useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import {
  Button,
  UserDetailsInfo,
  UserDetailsGeneralInfo,
} from "../../components";

// Contexts
import { UserContext } from "../../contexts";

// Icons
import lsqrBack from "../../assets/icons/lsqr-back.svg";

// Style
import "./userDetails.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const UserDetails: React.FC<Props> = ({ className }) => {
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    const userId = Number(localStorage.getItem("userId"));
    getUser(userId);
  }, []);

  return (
    <div className={`user-details ${className}`}>
      <div className="user-details__container">
        <Link to="/dashboard/users" className="user-details__back">
          <img
            className="user-details__back-icon"
            src={lsqrBack}
            alt="go back"
          />
          Back to Users
        </Link>
        <div className="user-details__header">
          <h2 className="user-details__heading secondary-heading is-text-primary-color">
            User Details
          </h2>
          <Button className="user-details__header-btn user-details__header-btn--blacklist btn--rsm btn--xm">
            Blacklist User
          </Button>
          <Button className="user-details__header-btn user-details__header-btn--activate btn--rsm btn--xm">
            Activate User
          </Button>
        </div>
        <UserDetailsInfo />
        <UserDetailsGeneralInfo />
      </div>
    </div>
  );
};

UserDetails.defaultProps = {
  className: "",
};

export default UserDetails;
