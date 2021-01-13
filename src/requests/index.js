import axios from "axios";

const baseURL = "https://fakeapijuit.herokuapp.com";

export const getUsersList = async () => {
  let res = await axios.get(`${baseURL}/users?_page=1&_limit=5`);
  return res.data;
};
