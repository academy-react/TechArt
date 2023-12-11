import React, { useState } from "react";
import { useEffect } from "react";
import { getProfileInfoAPI } from "../../../core/services/api/getProfileInfo";
import { loginAPI } from "../../../core/services/api/login";
import {
  getItem,
  setItem,
} from "../../../core/services/common/storage.services";
import { UpdateProfileInfo } from "../../../core/services/api/UpdateProfileInfo";
import { getFormData } from "../../../core/utils";
import { PersonalInfo } from "./PersonalInfo";
import { SocialInfo } from "./SocialInfo";
import { Tab } from "./Tab";

const EditProfile = () => {
  const [profileInfo, setProfileInfo] = useState();
  const [editProfileInitialValues, setEditProfileInitialValues] = useState();

  const loginUser = async () => {
    const userObj = {
      phoneOrGmail: "aliabdi1108@gmail.com",
      password: "Ali11909",
      rememberMe: true,
    };
    const user = await loginAPI(userObj);

    setItem("token", user.token);
  };

  const getProfileInfo = async () => {
    const profileInfoResponse = await getProfileInfoAPI();
    setProfileInfo(profileInfoResponse);
    setEditProfileInitialValues(makeEditProfileInfoObject(profileInfoResponse));
  };

  const makeEditProfileInfoObject = (profileInfo) => {
    const {
      lName,
      fName,
      userAbout,
      linkdinProfile,
      telegramLink,
      receiveMessageEvent,
      homeAdderess,
      nationalCode,
      gender,
      birthDay,
      latitude,
      longitude,
    } = profileInfo;

    const editProfileFormInfoObject = {
      LName: lName,
      FName: fName,
      UserAbout: userAbout,
      LinkdinProfile: linkdinProfile,
      TelegramLink: telegramLink,
      ReceiveMessageEvent: receiveMessageEvent,
      HomeAdderess: homeAdderess,
      NationalCode: nationalCode,
      Gender: gender,
      BirthDay: birthDay,
      Latitude: latitude,
      Longitude: longitude,
    };

    return editProfileFormInfoObject;
  };

  const onUpdateProfileInfo = async (profileInfoObject) => {
    console.log(profileInfoObject);
    const userProfileData = getFormData(profileInfoObject);

    const response = await UpdateProfileInfo(userProfileData);
    console.log(response);
  };

  useEffect(() => {
    loginUser();
    getProfileInfo();
  }, []);

  const tabs = [
    { name: "ویرایش اطلاعات شخصی", current: true },
    { name: "مدیریت تصاویر پروفایل", current: false },
    { name: "تغییر رمز عبور", current: false },
  ];

  return (
    <div>
      <Tab tabObject={tabs} />

      <PersonalInfo
        initialValues={editProfileInitialValues}
        onSubmit={onUpdateProfileInfo}
      />
    </div>
  );
};

export { EditProfile };
