import http from "../interceptor";

const UpdateProfileInfo = async (userProfileData) => {
  try {
    console.log("edit Profile Info Info started...");
    const result = await http.put(
      `/SharePanel/UpdateProfileInfo`,
      userProfileData
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { UpdateProfileInfo };
