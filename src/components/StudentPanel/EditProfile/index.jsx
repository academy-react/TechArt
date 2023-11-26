import React from "react";
import { useEffect } from "react";
import { getProfileInfo } from "../../../core/services/api/getProfileInfo";
import { loginAPI } from "../../../core/services/api/login";
import { setItem } from "../../../core/services/common/storage.services";

const EditProfile = () => {
  const loginUser = async () => {
    const userObj = {
      phoneOrGmail: "aliabdi1108@gmail.com",
      password: "Ali11909",
      rememberMe: true,
    };
    const user = await loginAPI(userObj);

    console.log(user);

    setItem("token", user.token);
  };

  useEffect(() => {
    loginUser();
  }, []);

  return <div>EditProfile</div>;
};

export { EditProfile };
