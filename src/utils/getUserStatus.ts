// User Status
enum Status {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

/**
 * Get User Status Based On Last Active Date
 * @param lastActiveDate Users last active date
 * @returns {Status}
 */
const getStatus = (lastActiveDate: string | Date): Status => {
  const now = Date.now();
  const compareDate = new Date(lastActiveDate).getTime();
  if (now > compareDate) return Status.INACTIVE;
  else return Status.ACTIVE;
};

export default getStatus;
