import { handleUser } from "./actions";
import { requestUser } from "../../../requests";

export const handleUserThunk = (id) => async (dispatch, _getState) => {
  const user = await requestUser(id);
  dispatch(handleUser(user));
};
