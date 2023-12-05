import http from "../interceptor";

const getProfileInfoAPI = async () => {
  try {
    const result = await http.get(`/SharePanel/GetProfileInfo`);

    return result;
  } catch (error) {
    return [];
  }
};

export { getProfileInfoAPI };
