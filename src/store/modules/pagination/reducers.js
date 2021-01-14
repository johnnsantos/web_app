import { pages } from "./types";

const defaultState = 1;

const GetPage = (state = defaultState, action) => {
  switch (action.type) {
    case pages:
      return state + action.page;

    default:
      return state;
  }
};

export default GetPage;
