import api from "../../services/api";

export function login(user, password) {
  const url = `sessions`;
  return new Promise((resolve, reject) => {
    api
      .post(url, { username: user, password })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}
