import axios from "axios";
import http from "../interceptor";
import { baseUrl } from "../../../config";

const loginAPI = async (user) => {
  try {
    console.log("Login started...");
    const response = await axios.get(`${baseUrl}/Sign/Login`, user);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { loginAPI };
