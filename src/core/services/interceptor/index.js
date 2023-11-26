import axios from "axios";
import { baseUrl } from "../../../config";
import { getItem, removeItem } from "../common/storage.services";

const instance = axios.create({ baseURL: baseUrl });

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  console.log(error);

  if (error.response.status === 401) {
    removeItem("token");
    window.location.pathname = "/auth/login";
  }

  if (error.response.this.status >= 400 && error.response.status <= 500) {
    console.log("Client Error: " + error.response.status);
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((options) => {
  const token = getItem("token");
  if (token) options.headers.Authorization = "bearer " + token;
});

export default instance;
