import axios from "axios";

const baseURL = "https://fakeapijuit.herokuapp.com";

export const getUsersList = async () => {
  let res = await axios.get(`${baseURL}/users`);
  return res.data;
};
