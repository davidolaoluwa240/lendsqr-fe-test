// Modules
import React from "react";

// Components
import { Input, Button, Form, Paper, InputSelect } from "../";

// Models
import { IUser } from "../../models";

// Data
import { statusItems } from "../../data";

// Style
import "./userTableHeadFilter.styles.scss";

// Interfaces
interface Props {
  className?: string;
  handleFiltering: (isReset?: boolean) => void;
  users: IUser[];
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const UserTableHeadFilter: React.FC<Props> = ({
  className,
  handleFiltering,
  users,
  onClick,
  organization,
  setOrganization,
  status,
  setStatus,
  username,
  setUsername,
  email,
  setEmail,
  date,
  setDate,
  phoneNumber,
  setPhoneNumber,
}) => {
  const organizationItems = Array.from(
    new Set(users.map(({ orgName }) => orgName)),
    (value, index) => ({ key: index, label: value })
  );
  organizationItems.unshift({ key: -1, label: "Select" });

  const onResetFiltering = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    // Reset Filtering Data
    setUsername("");
    setEmail("");
    setDate("");
    setPhoneNumber("");
    setOrganization("");
    setStatus("");

    // Reset Filtering
    handleFiltering(true);
  };

  return (
    <Paper className={`user-table-filter ${className}`} onClick={onClick}>
      <div className="user-table-filter__container">
        <Form
          className="user-table-filter__form"
          handleSubmit={() => handleFiltering()}
        >
          <InputSelect
            formGroupClass="user-table-filter__group"
            className="user-table-filter__control"
            name="Organization"
            label="Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            options={organizationItems}
          />

          <Input
            formGroupClass="user-table-filter__group"
            className="user-table-filter__control"
            name="username"
            label="Username"
            placeholder="User"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            formGroupClass="user-table-filter__group"
            className="user-table-filter__control"
            name="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            formGroupClass="user-table-filter__group"
            className="user-table-filter__control"
            type="date"
            name="date"
            label="Date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            formGroupClass="user-table-filter__group"
            className="user-table-filter__control"
            name="phone-number"
            label="Phone Number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <InputSelect
            formGroupClass="user-table-filter__group"
            className="user-table-filter__control"
            name="Status"
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={statusItems}
          />
          <div className="user-table-filter__btn-group">
            <Button
              className="user-table-filter__btn user-table-filter__btn--reset btn--primary-bordered btn--xm"
              onClick={onResetFiltering}
            >
              Reset
            </Button>
            <Button
              className="user-table-filter__btn btn--primary btn--xm"
              type="submit"
            >
              Filter
            </Button>
          </div>
        </Form>
      </div>
    </Paper>
  );
};

UserTableHeadFilter.defaultProps = {
  className: "",
  users: [],
};

export default UserTableHeadFilter;
