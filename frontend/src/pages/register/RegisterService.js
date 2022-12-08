import api from "../../services/api";

export function register(form) {
  const url = `users`;
  return new Promise((resolve, reject) => {
    api
      .post(url, form)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}
