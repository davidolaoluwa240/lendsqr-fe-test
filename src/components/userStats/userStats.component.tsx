// Modules
import React from "react";

// Components
import { Paper } from "../";

// Assets
import lsqrStatsUsers from "../../assets/icons/lsqr-stats-users.svg";
import lsqrStatsActiveUsers from "../../assets/icons/lsqr-stats-active-users.svg";
import lsqrStatsLoanUsers from "../../assets/icons/lsqr-stats-loan-users.svg";
import lsqrStatsSavingUsers from "../../assets/icons/lsqr-stats-saving-users.svg";

// Style
import "./userStats.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const UserStats: React.FC<Props> = ({ className }) => {
  return (
    <div className={`user-stats ${className}`}>
      <div className="user-stats__container">
        <Paper className="user-stats__box users-stats__box--users">
          <img className="user-stats__icon" src={lsqrStatsUsers} alt="Users" />
          <p className="user-stats__text">Users</p>
          <p className="user-stats__number secondary-heading is-text-primary-color">
            2,453
          </p>
        </Paper>
        <Paper className="user-stats__box users-stats__box--active-users">
          <img
            className="user-stats__icon"
            src={lsqrStatsActiveUsers}
            alt="Active Users"
          />
          <p className="user-stats__text">Active Users</p>
          <p className="user-stats__number secondary-heading is-text-primary-color">
            2,453
          </p>
        </Paper>
        <Paper className="user-stats__box users-stats__box--loan-users">
          <img
            className="user-stats__icon"
            src={lsqrStatsLoanUsers}
            alt="Users with Loans"
          />
          <p className="user-stats__text">Users with Loans</p>
          <p className="user-stats__number secondary-heading is-text-primary-color">
            12,453
          </p>
        </Paper>
        <Paper className="user-stats__box users-stats__box--saving-users">
          <img
            className="user-stats__icon"
            src={lsqrStatsSavingUsers}
            alt="Users with Savings"
          />
          <p className="user-stats__text">Users with Savings</p>
          <p className="user-stats__number secondary-heading is-text-primary-color">
            102,453
          </p>
        </Paper>
      </div>
    </div>
  );
};

UserStats.defaultProps = {
  className: "",
};

export default UserStats;
