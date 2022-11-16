// Modules
import React, { useContext } from "react";

// Components
import { Paper } from "../";

// Contexts
import { UserContext } from "../../contexts";

// Style
import "./userDetailsGeneralInfo.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const UserDetailsGeneralInfo: React.FC<Props> = ({ className }) => {
  const { user } = useContext(UserContext);

  return (
    <Paper className={`user-details__general-info ${className}`}>
      <div className="user-details__general-info-container">
        <div className="user-details__general-info-item">
          <h3 className="user-details__general-info-item-heading">
            Personal Information
          </h3>
          <ul className="user-details__general-info-item-list user-details__general-info-item-list--information">
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                full Name
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {`${user.profile.firstName} ${user.profile.lastName}`}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Phone Number
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.profile.phoneNumber}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Email Address
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.email}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Bvn
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.profile.bvn}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Gender
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.profile.gender}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Marital status
              </p>
              <p className="user-details__general-info-item-list-item-value">
                Single
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Children
              </p>
              <p className="user-details__general-info-item-list-item-value">
                None
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Type of residence
              </p>
              <p className="user-details__general-info-item-list-item-value">
                Parent’s Apartment
              </p>
            </li>
          </ul>
        </div>
        <div className="user-details__general-info-item">
          <h3 className="user-details__general-info-item-heading">
            Education and Employment
          </h3>
          <ul className="user-details__general-info-item-list">
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                level of education
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.education.level}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                employment status
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.education.employmentStatus}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                sector of employment
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.education.sector}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Duration of employment
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.education.duration}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                office email
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.education.officeEmail}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Monthly income
              </p>
              <p className="user-details__general-info-item-list-item-value">
                ₦{user.education.monthlyIncome}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                loan repayment
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.education.loanRepayment}
              </p>
            </li>
          </ul>
        </div>
        <div className="user-details__general-info-item">
          <h3 className="user-details__general-info-item-heading">Socials</h3>
          <ul className="user-details__general-info-item-list">
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Twitter
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.socials.twitter}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Facebook
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.socials.facebook}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Instagram
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.socials.instagram}
              </p>
            </li>
          </ul>
        </div>
        <div className="user-details__general-info-item">
          <h3 className="user-details__general-info-item-heading">Guarantor</h3>
          <ul className="user-details__general-info-item-list">
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                full Name
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {`${user.guarantor.firstName} ${user.guarantor.lastName}`}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Phone Number
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.guarantor.phoneNumber}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Email Address
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.email}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Relationship
              </p>
              <p className="user-details__general-info-item-list-item-value">
                Sister
              </p>
            </li>
          </ul>
        </div>
        <div className="user-details__general-info-item">
          <ul className="user-details__general-info-item-list">
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                full Name
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {`${user.profile.firstName} ${user.profile.lastName}`}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Phone Number
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.profile.phoneNumber}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Email Address
              </p>
              <p className="user-details__general-info-item-list-item-value">
                {user.email}
              </p>
            </li>
            <li className="user-details__general-info-item-list-item">
              <p className="user-details__general-info-item-list-item-title">
                Relationship
              </p>
              <p className="user-details__general-info-item-list-item-value">
                Sister
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Paper>
  );
};

UserDetailsGeneralInfo.defaultProps = {
  className: "",
};

export default UserDetailsGeneralInfo;
