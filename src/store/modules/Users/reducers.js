import { users } from "./types";

const defaultState = { users: [] };

const Users = (state = defaultState, action) => {
  const { list, type } = action;
  switch (type) {
    case users:
      return { users: [...list] };

    default:
      return state;
  }
};

export default Users;
