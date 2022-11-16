// Modules
import React from "react";

// Guarantor Interface
interface IGuarantor {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

// Education Interface
interface IEducation {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
}

// Social Interface
interface ISocial {
  facebook: string;
  instagram: string;
  twitter: string;
}

// Profile Interface
interface IProfile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

// User Interface
export interface IUser {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  createdAt: string;
  id: string;
  accountBalance: string;
  accountNumber: string;
  profile: IProfile;
  socials: ISocial;
  education: IEducation;
  guarantor: IGuarantor;
}

// UIContextType Interface
export interface IUIContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarMenuOpen: boolean;
  setIsSidebarMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// SearchContextType Interface
export interface ISearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  toggleSearchModalVisibility: () => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

// UserContextType Interface
export interface IUserContextType {
  users: IUser[];
  user: IUser;
  getUsers: () => void;
  getUser: (id: number) => void;
}
