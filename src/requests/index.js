import axios from "axios";

const baseURL = "https://fakeapijuit.herokuapp.com";

export const getUsersList = async (currentPage) => {
  let res = await axios.get(`${baseURL}/users?_page=${currentPage}&_limit=5`);
  return res.data;
};

export const requestUser = async (id) => {
  let res = await axios.get(`${baseURL}/users/${id}`);
  return res.data;
};
