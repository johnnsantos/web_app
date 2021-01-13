import { users } from "./types";

export const handleUsers = (dataList) => {
  return {
    type: users,
    list: dataList,
  };
};
