import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const ServiceApi = async () => {
  try {
    const res = await axios.get(`${API_URL}?_limit=5`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
