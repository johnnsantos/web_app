import { handleUsers } from "./actions";
import { getUsersList } from "../../../requests";

export const handleUsersThunk = (page) => async (dispatch, _getState) => {
  const list = await getUsersList(page);
  dispatch(handleUsers(list));
};
