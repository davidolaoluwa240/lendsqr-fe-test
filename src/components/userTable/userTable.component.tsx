// Modules
import React, { useState, useEffect, useContext } from "react";

// Components
import { Link } from "react-router-dom";
import { Paper, UserTableHeadFilter, Button, Pagination } from "..";

// Contexts
import { UserContext } from "../../contexts";

// Hooks
import { usePaginate } from "../../hooks";

// Data
import { userTableHeadItems } from "../../data";

// Models
import { IUser } from "../../models";

// Utils
import { dateFormat, getStatus } from "../../utils";

// Assets
import lsqrFilter from "../../assets/icons/lsqr-filter.svg";
import lsqrMoreMenu from "../../assets/icons/lsqr-more-menu.svg";
import lsqrEye from "../../assets/icons/lsqr-eye.svg";
import lsqrUserTimes from "../../assets/icons/lsqr-user-times.svg";
import lsqrUserActivate from "../../assets/icons/lsqr-user-activate.svg";

// Style
import "./userTable.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const paginationLimitOptions = [
  { key: 1, label: 10 },
  { key: 2, label: 50 },
  { key: 3, label: 100 },
];
const UserTable: React.FC<Props> = ({ className }) => {
  const { users } = useContext(UserContext);
  const [organization, setOrganization] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [activeDropdownName, setActiveDropdownName] = useState<string>("");
  const [activeMenuDropdownId, setActiveMenuDropdownId] = useState<string>("");
  const {
    limit,
    setPage,
    totalPages,
    totalResult,
    setLimit,
    paginatedData,
    hasNextPage,
    hasPrevPage,
    page,
  } = usePaginate<IUser>(users);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(paginatedData);

  useEffect(() => {
    setFilteredUsers(paginatedData);
  }, [paginatedData]);

  useEffect(() => {
    const closeTableHeadFilterDropdown = (e: Event): void => {
      const target = e.target as HTMLElement;
      const closestTableHeadRow = target?.closest(
        ".user-table__head-row"
      ) as HTMLElement;
      if (closestTableHeadRow?.classList.contains("user-table__head-row"))
        return;
      setActiveDropdownName("");
    };

    const closeTableBodyMenuDropdown = (e: Event): void => {
      const target = e.target as HTMLElement;
      if (target?.classList.contains("user-table__body-data-menu-icon")) return;
      setActiveMenuDropdownId("");
    };

    const closeDropdown = (e: Event): void => {
      closeTableHeadFilterDropdown(e);
      closeTableBodyMenuDropdown(e);
    };

    document.body.addEventListener("click", closeDropdown);
    return function () {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  /**
   * Toggle Table Head Filter Dropdown Visibility
   */
  const onToggleActiveDropdownName = (name: string) => {
    if (name === activeDropdownName) setActiveDropdownName("");
    else setActiveDropdownName(name);
  };

  /**
   * Toggle Table Body Data Menu Dropdown Visibility
   */
  const onToggleActiveMenuDropdownId = (name: string) => {
    if (name === activeMenuDropdownId) setActiveMenuDropdownId("");
    else setActiveMenuDropdownId(name);
  };

  // Filter Table By => organization, email, phoneNumber, username
  const onHandleFiltering = (isReset: boolean = false) => {
    if (isReset) {
      setFilteredUsers(paginatedData);
      return;
    }

    const filterValue = {
      email,
      organization,
      phoneNumber,
      username,
    };

    const filteredUsers = paginatedData.filter(
      ({ orgName, email, profile: { phoneNumber }, userName }) => {
        return (
          email.toLowerCase().includes(filterValue.email.toLowerCase()) &&
          orgName
            .toLowerCase()
            .includes(filterValue.organization.toLowerCase()) &&
          phoneNumber
            .toLowerCase()
            .includes(filterValue.phoneNumber.toLowerCase()) &&
          userName.toLowerCase().includes(filterValue.username.toLowerCase())
        );
      }
    );
    setFilteredUsers(filteredUsers);
    setActiveDropdownName("");
  };

  /**
   * Save Clicked User Id To Local Storage
   */
  const saveUserIdToLocalStorage = (id: string | number): void => {
    window.localStorage.setItem("userId", String(id));
  };

  const renderedTableHeadData = userTableHeadItems.map((item, index) => (
    <th
      key={index}
      className="user-table__head-data"
      onClick={() => onToggleActiveDropdownName(item)}
    >
      {item}
      <img
        className="user-table__head-icon"
        src={lsqrFilter}
        alt="table filter"
      />
      <UserTableHeadFilter
        className={`user-table__head-dropdown ${
          item !== activeDropdownName ? "d-none" : ""
        }`}
        users={users}
        organization={organization}
        setOrganization={setOrganization}
        status={status}
        setStatus={setStatus}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        date={date}
        setDate={setDate}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        handleFiltering={onHandleFiltering}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </th>
  ));

  const renderedEmptyTableBody = (
    <tr className="user-table__body-row-empty">
      <td className="user-table__body-data-empty" colSpan={6}>
        No Records
      </td>
    </tr>
  );

  const renderedTableBodyData = filteredUsers.map(
    (
      {
        id,
        orgName,
        userName,
        email,
        profile: { phoneNumber },
        createdAt,
        lastActiveDate,
      },
      index,
      arr
    ) => (
      <React.Fragment key={id}>
        <tr className="user-table__body-row">
          <td className="user-table__body-data">{orgName}</td>
          <td className="user-table__body-data">{userName}</td>
          <td className="user-table__body-data">{email}</td>
          <td className="user-table__body-data">{phoneNumber}</td>
          <td className="user-table__body-data">{dateFormat(createdAt)}</td>
          <td className="user-table__body-data user-table__body-data--status">
            <Button
              className={`user-table__body-btn btn--rmd user-table__body-btn--${getStatus(
                lastActiveDate
              ).toLowerCase()}`}
            >
              {getStatus(lastActiveDate)}
            </Button>
            <img
              className="user-table__body-data-menu-icon is-cursor-pointer"
              src={lsqrMoreMenu}
              alt="More Menu"
              onClick={() => onToggleActiveMenuDropdownId(id)}
            />

            <Paper
              className={`user-table__body-data-dropdown ${
                activeMenuDropdownId !== id ? "d-none" : ""
              }`}
            >
              <ul className="user-table__body-data-dropdown-list">
                <li className="user-table__body-data-dropdown-item">
                  <Link
                    to={`/dashboard/users/${id}`}
                    onClick={() => saveUserIdToLocalStorage(id)}
                    className="user-table__body-data-dropdown-link"
                  >
                    <img
                      className="user-table__body-data-dropdown-icon"
                      src={lsqrEye}
                      alt="view details"
                    />
                    View Details
                  </Link>
                </li>
                <li className="user-table__body-data-dropdown-item">
                  <Link
                    to="/dashboard/users"
                    className="user-table__body-data-dropdown-link"
                  >
                    <img
                      className="user-table__body-data-dropdown-icon"
                      src={lsqrUserTimes}
                      alt="blacklist user"
                    />
                    Blacklist User
                  </Link>
                </li>
                <li className="user-table__body-data-dropdown-item">
                  <Link
                    to="/dashboard/users"
                    className="user-table__body-data-dropdown-link"
                  >
                    <img
                      className="user-table__body-data-dropdown-icon"
                      src={lsqrUserActivate}
                      alt="activate user"
                    />
                    Activate User
                  </Link>
                </li>
              </ul>
            </Paper>
          </td>
        </tr>
        {index !== arr.length - 1 && (
          <hr className="user-table__body-row-line" />
        )}
      </React.Fragment>
    )
  );

  return (
    <>
      <Paper className={`user-table-box ${className}`}>
        <table className="user-table">
          <thead className="user-table__head">
            <tr className="user-table__head-row">{renderedTableHeadData}</tr>
          </thead>

          <tbody className="user-table__body">
            {!filteredUsers.length && renderedEmptyTableBody}
            {!!filteredUsers.length && renderedTableBodyData}
          </tbody>
        </table>
      </Paper>
      <Pagination
        className="user-pagination"
        paginationLimit={limit}
        paginationLimitOptions={paginationLimitOptions}
        totalPages={totalPages}
        totalResult={totalResult}
        setPaginationLimit={setLimit}
        setPage={setPage}
        page={page}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
};

UserTable.defaultProps = {
  className: "",
};

export default UserTable;
