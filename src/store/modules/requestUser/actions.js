import { user } from "./types";

export const handleUser = (dataList) => {
  return {
    type: user,
    list: dataList,
  };
};
