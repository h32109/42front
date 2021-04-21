import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getUser = uid =>
  axios.get(`${API_ENDPOINT}/users/${uid}`).then(res => res.data);

export function createNewUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`New user [${user.nickname}] is successfully created.`);

      if (user.uid < 0) reject(new Error("Fail creating a new user !"));
    }, 100);
  });
}

export function updateUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) {
        reject(new Error("Update failed."));
      }

      resolve(`User-${user.uid} has been updated.`);
    }, 100);
  });
}

export function deleteUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) reject(new Error("Delete failed."));

      resolve(`User-${user.uid} has been deleted.`);
    }, 100);
  });
}
