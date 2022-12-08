import api from "../../services/api";
import { handleGetSessionStorage } from "../../services/helpers";

export const get = () => {
  const { username } = handleGetSessionStorage();

  const url = `projects/${username}`;
  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const getById = (id) => {
  const url = `project/${id}`;
  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const postOrPut = (record, method) => {
  const { username } = handleGetSessionStorage();

  let data = { ...record, username };
  const url = `projects`;
  return new Promise((resolve, reject) => {
    api({ method, url, data })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const destroy = (id) => {
  const { username } = handleGetSessionStorage();

  const url = `projects/id/${id}/username/${username}`;
  return new Promise((resolve, reject) => {
    api
      .delete(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const done = (id) => {
  const url = `project/${id}/done`;
  return new Promise((resolve, reject) => {
    api
      .patch(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};
