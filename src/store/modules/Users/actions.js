import { users } from "./types";

export const handleUsers = (userslist) => {
  return {
    type: users,
    list: userslist,
  };
};
