import axios from "axios";

const API_URL = "http://localhost:5000";

const testRequest = async () => {
  try {
    const { data } = await axios.get(API_URL);
    console.log("aaa", data);
  } catch (e) {
    console.log("err", e);
  }
};

export default testRequest;
