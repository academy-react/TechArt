import axios from "axios";
import { baseUrl } from "../../../config";
import { getItem, removeItem } from "../common/storage.services";

// const instance = axios.create({
//   baseURL: baseUrl,
// import { getItem } from "../common/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

// const onError = (error) => {
//   console.log(error);

//   if (error.response.status === 401) {
//     removeItem("token");
//     window.location.pathname = "/auth/login";
//   }

//   if (error.response.this.status >= 400 && error.response.status <= 500) {
//     console.log("Client Error: " + error.response.status);
//   }

//   return Promise.reject(error);
// };

// instance.interceptors.response.use(onSuccess, onError);
// instance.interceptors.request.use((options) => {
//   const token = getItem("token");
//   if (token) options.headers.Authorization = "bearer " + token;
//   return options;
const onError = (err) => {
  console.log(err);

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  //  const token =getItem("token");
  //  opt.headers.Authorization="Bearer "+token;
  return opt;
});

export default instance;
