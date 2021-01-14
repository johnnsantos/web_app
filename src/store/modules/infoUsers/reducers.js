import { users } from "./types";

const defaultState = { db: [] };

const Users = (state = defaultState, action) => {
  const { type, list } = action;
  switch (type) {
    case users:
      return { db: [...list] };

    default:
      return state;
  }
};

export default Users;
