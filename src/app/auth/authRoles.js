/**
 * Authorization Roles
 */
const authRoles = {
  admin: ["admin"],
  staff: ["admin", "user"],
  user: ["user", "admin"],
  onlyGuest: [],
};

export default authRoles;
