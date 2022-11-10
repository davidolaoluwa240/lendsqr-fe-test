// Assets
import lsqrHomeOutline from "../assets/icons/lsqr-home-outline.svg";
import lsqrUserFriends from "../assets/icons/lsqr-user-friends.svg";
import lsqrUserGroupOutline from "../assets/icons/lsqr-user-group-outline.svg";
import lsqrMoneyOutline from "../assets/icons/lsqr-money-outline.svg";
import lsqrHandshakeOutline from "../assets/icons/lsqr-handshake-outline.svg";
import lsqrPiggyBankOutline from "../assets/icons/lsqr-piggy-bank-outline.svg";
import lsqrMoneyGrantOutline from "../assets/icons/lsqr-money-grant-outline.svg";
import lsqrUserCheckOutline from "../assets/icons/lsqr-user-check-outline.svg";
import lsqrUserTimesOutline from "../assets/icons/lsqr-user-times-outline.svg";
import lsqrBriefcaseOutline from "../assets/icons/lsqr-briefcase-outline.svg";
import lsqrNpBankOutline from "../assets/icons/lsqr-np-bank-outline.svg";
import lsqrCoinsSolidOutline from "../assets/icons/lsqr-coins-solid-outline.svg";
import lsqrTransactionOutline from "../assets/icons/lsqr-transaction-outline.svg";
import lsqrGalaxyOutline from "../assets/icons/lsqr-galaxy-outline.svg";
import lsqrUserCogOutline from "../assets/icons/lsqr-user-cog-outline.svg";
import lsqrScrollOutline from "../assets/icons/lsqr-scroll-outline.svg";
import lsqrChartbarOutline from "../assets/icons/lsqr-chartbar-outline.svg";
import lsqrSlidersOutline from "../assets/icons/lsqr-sliders-outline.svg";
import lsqrBadgePercentOutline from "../assets/icons/lsqr-badge-percent-outline.svg";
import lsqrClipboardListOutline from "../assets/icons/lsqr-clipboard-list-outline.svg";

// TODO: replace icon with svg sprite later

export const sideNavbarList = [
  {
    icon: lsqrHomeOutline,
    name: "Dashboard",
    to: "/dashboard/unknown",
    className: "dashboard-layout-sidenavbar__item--dashboard",
  },
  {
    group: "CUSTOMERS",
    items: [
      { icon: lsqrUserFriends, name: "Users", to: "/dashboard/users" },
      {
        icon: lsqrUserGroupOutline,
        name: "Guarantors",
        to: "/dashboard/guarantors",
      },
      { icon: lsqrMoneyOutline, name: "Loans", to: "/dashboard/loans" },
      {
        icon: lsqrHandshakeOutline,
        name: "Decision Models",
        to: "/dashboard/decision-models",
      },
      { icon: lsqrPiggyBankOutline, name: "Savings", to: "/dashboard/savings" },
      {
        icon: lsqrMoneyGrantOutline,
        name: "Loan Requests",
        to: "/dashboard/loan-request",
      },
      {
        icon: lsqrUserCheckOutline,
        name: "Whitelist",
        to: "/dashboard/whitelist",
      },
      { icon: lsqrUserTimesOutline, name: "Karma", to: "/dashboard/karma" },
    ],
  },
  {
    group: "BUSINESSES",
    items: [
      {
        icon: lsqrBriefcaseOutline,
        name: "Organization",
        to: "/dashboard/organization",
      },
      {
        icon: lsqrMoneyGrantOutline,
        name: "Loan Products",
        to: "/dashboard/loan-products",
      },
      {
        icon: lsqrNpBankOutline,
        name: "Savings Products",
        to: "/dashboard/saving-products",
      },
      {
        icon: lsqrCoinsSolidOutline,
        name: "Fees and Charges",
        to: "/dashboard/fees-charges",
      },
      {
        icon: lsqrTransactionOutline,
        name: "Transactions",
        to: "/dashboard/transactions",
      },
      { icon: lsqrGalaxyOutline, name: "Services", to: "/dashboard/services" },
      {
        icon: lsqrUserCogOutline,
        name: "Service Account",
        to: "/dashboard/service-account",
      },
      {
        icon: lsqrScrollOutline,
        name: "Settlements",
        to: "/dashboard/settlements",
      },
      { icon: lsqrChartbarOutline, name: "Reports", to: "/dashboard/reports" },
    ],
  },
  {
    group: "SETTINGS",
    items: [
      {
        icon: lsqrSlidersOutline,
        name: "Preferences",
        to: "/dashboard/preferences",
      },
      {
        icon: lsqrBadgePercentOutline,
        name: "Fees and Pricing",
        to: "/dashboard/fees-pricing",
      },
      {
        icon: lsqrClipboardListOutline,
        name: "Audit Logs",
        to: "/dashboard/audit-logs",
      },
    ],
  },
];
