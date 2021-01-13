import { handleUsers } from "./actions";
import axios from "axios";

const getUsersList = async () => {
  let res = await axios.get("https://fakeapijuit.herokuapp.com/users");
  return res;
};

export const handleUsersThunk = () => async (dispatch, _getState) => {
  const list = await getUsersList();
  dispatch(handleUsers(list));
};
