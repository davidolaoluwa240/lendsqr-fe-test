// Modules
import React, { createContext, useState, useContext } from "react";

// Apis
import lendSqrMockApi from "../api/lendSqrMockApi";

// Utils
import { catchAsync } from "../utils";

// Models
import { IUserContextType, IUser } from "../models";

// Contexts
import { UIContext } from "./UIContext";

// Interfaces
interface Props {
  children: React.ReactNode;
}

// Initial Value
const INITIAL_USER: IUser = {
  createdAt: "",
  email: "",
  lastActiveDate: "",
  orgName: "",
  phoneNumber: "",
  userName: "",
  id: "0",
  accountBalance: "",
  accountNumber: "",
  profile: {
    address: "",
    avatar: "",
    bvn: "",
    currency: "",
    firstName: "",
    gender: "",
    lastName: "",
    phoneNumber: "",
  },
  education: {
    duration: "",
    employmentStatus: "",
    level: "",
    loanRepayment: "",
    monthlyIncome: [],
    officeEmail: "",
    sector: "",
  },
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
  guarantor: {
    address: "",
    firstName: "",
    gender: "",
    lastName: "",
    phoneNumber: "",
  },
};

// User Context
export const UserContext = createContext<IUserContextType>({
  users: [],
  user: INITIAL_USER,
  getUsers: () => {},
  getUser: (id: number) => {},
});

// User Provider
export const UserProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const { setLoading } = useContext(UIContext);

  const getUsers = catchAsync(async () => {
    const response = await lendSqrMockApi.get("users");
    setUsers(response.data);
  }, setLoading);

  const getUser = catchAsync(async (id: number) => {
    const response = await lendSqrMockApi.get(`users/${id}`);
    setUser(response.data);
  }, setLoading);

  return (
    <UserContext.Provider
      value={{
        users,
        user: user as IUser,
        getUsers,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
