/**
 * Authorization Roles
 */
const authRoles = {
  admin: ["admin"],
  staff: ["admin", "user", "staff"],
  user: ["admin", "user"],
  onlyGuest: [],
};

export default authRoles;
