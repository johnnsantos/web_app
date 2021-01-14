import { users } from "./types";

const defaultState = [];

const Users = (state = defaultState, action) => {
  const { type, list } = action;
  switch (type) {
    case users:
      return [...list];

    default:
      return state;
  }
};

export default Users;
