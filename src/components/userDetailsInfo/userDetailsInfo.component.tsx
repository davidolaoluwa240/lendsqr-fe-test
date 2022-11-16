// Modules
import React, { useContext } from "react";

// Components
import { Paper } from "../";

// Contexts
import { UserContext } from "../../contexts";

// Icons
import lsqrAvatar from "../../assets/icons/lsqr-avatar.svg";
import lsqrRatingOutline from "../../assets/icons/lsqr-star-rating-outline.svg";
import lsqrRating from "../../assets/icons/lsqr-star-rating.svg";

// Style
import "./userDetailsInfo.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const UserDetailsInfo: React.FC<Props> = ({ className }) => {
  const { user } = useContext(UserContext);

  return (
    <Paper className={`user-details__info ${className}`}>
      <div className="user-details__info-container">
        <div className="user-details__info-header">
          <div className="user-details__info-detail">
            <img
              className="user-details__info-user-photo"
              src={lsqrAvatar}
              alt={user.profile.firstName}
            />
            <p className="user-details__info-detail-text">
              <span className="user-details__info-detail-username">
                {`${user.profile.firstName} ${user.profile.lastName}`}
              </span>
              <span className="user-details__info-detail-code">
                {user.profile.bvn}
              </span>
            </p>
          </div>
          <div className="user-details__info-rating-wrapper">
            <p className="user-details__info-rating-text">User’s Tier</p>
            <div className="user-details__info-rating-box">
              <img
                className="user-details__info-rating user-details__info-rating--bold"
                src={lsqrRating}
                alt="star rating"
              />
              <img
                className="user-details__info-rating"
                src={lsqrRatingOutline}
                alt="star rating"
              />
              <img
                className="user-details__info-rating"
                src={lsqrRatingOutline}
                alt="star rating"
              />
            </div>
          </div>
          <div className="user-details__info-account">
            <p className="user-details__info-account-balance">
              ₦{user.accountBalance}
            </p>
            <p className="user-details__info-account-bank">
              {user.accountNumber}/Providus Bank
            </p>
          </div>
        </div>
        <div className="user-details__info-navigation">
          <ul className="user-details__info-nav-list">
            <li className="user-details__info-nav-item user-details__info-nav-item--active">
              General Details
            </li>
            <li className="user-details__info-nav-item">Documents</li>
            <li className="user-details__info-nav-item">Bank Details</li>
            <li className="user-details__info-nav-item">Loans</li>
            <li className="user-details__info-nav-item">Savings</li>
            <li className="user-details__info-nav-item">App and System</li>
          </ul>
        </div>
      </div>
    </Paper>
  );
};

UserDetailsInfo.defaultProps = {
  className: "",
};

export default UserDetailsInfo;
