import { handlePage } from "./actions";

export const handlePageThunk = (page) => async (dispatch, _getState) => {
  dispatch(handlePage(page));
};
