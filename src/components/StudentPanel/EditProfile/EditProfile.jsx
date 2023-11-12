import React from "react";
import image from "../../../assets/image/Profile.jpeg";
import { CustomForm, CustomInput } from "../../common/customElements";

const EditProfile = () => {
  return (
    <div className="Edit-Profile">
      <div className="profile-pic aspect-square w-40 border-4 border-green-600 border-solid rounded-full overflow-hidden">
        <img
          src={image}
          alt="profile pic"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="formWrapper">
        <CustomForm>
          <div className="insideForm grid grid-cols-3">
            <div className="bg-green-300 h-12"></div>
            <div className="bg-green-400 h-12"></div>
            <div className="bg-green-500 h-12"></div>
            <div className="bg-green-500 h-12"></div>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export { EditProfile };
