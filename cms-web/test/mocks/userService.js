import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getUser = uid =>
  axios.get(`${API_ENDPOINT}/users/${uid}`).then(res => res.data);

export const createUser = newUser => {
  return axios.post(`${API_ENDPOINT}/users`, newUser).then(res => res.data);
};

export const updateUser = user => {
  return axios.put(`${API_ENDPOINT}/users`, user).then(res => res.data);
};

export const deleteUser = uid => {
  return axios.delete(`${API_ENDPOINT}/users/${uid}`).then(res => res.data);
};
