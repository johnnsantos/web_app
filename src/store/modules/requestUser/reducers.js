import { user } from "./types";

const defaultState = [];

const GetUser = (state = defaultState, action) => {
  const { type, list } = action;
  switch (type) {
    case user:
      return list;

    default:
      return state;
  }
};

export default GetUser;
