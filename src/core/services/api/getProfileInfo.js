import http from "../interceptor";

const getProfileInfo = async () => {
  try {
    console.log("Get Profile Info Fetching started...");
    const result = await http.get(`/SharePanel/GetProfileInfo`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getProfileInfo };
