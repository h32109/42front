import axios, { AxiosInstance } from "axios";

export default class BaseRepository {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000",
      // headers: { token: "token" },
    });
  }
}
