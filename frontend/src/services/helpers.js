import { Auth } from "../config/storage";

export const handleGetSessionStorage = () => {
  return {
    username: sessionStorage.getItem(Auth)
      ? JSON.parse(sessionStorage.getItem(Auth)).user.username
      : "",
  };
};

export const formatDate = (data) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const date = new Date(data);
  const dateFormated = date.toLocaleDateString("pt-br", options);
  return dateFormated;
};

export const formatDateEnUS = (data) => {
  let date = data ? new Date(data) : new Date();

  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
