import axios from "axios";

export const getUsersList = async () => {
  let res = await axios.get("https://fakeapijuit.herokuapp.com/users");
  return res.data;
};
