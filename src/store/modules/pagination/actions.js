import { pages } from "./types";

export const handlePage = (page) => {
  return {
    type: pages,
    page,
  };
};
