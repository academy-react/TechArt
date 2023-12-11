import React from "react";
import { CustomForm } from "../../common/customElements/CustomForm";
import { CustomInput } from "../../common/customElements/CustomInput";
import { EditProfileInputContainer } from "./EditProfileInputContainer";
import { IoCall } from "react-icons/io5";
import { EditProfileTextAreaContainer } from "./EditProfileTextAreaContainer";

const SocialInfo = () => {
  return (
    <>
      <CustomForm>
        <div className="bg-red-400 flex flex-wrap w-full justify-evenly pt-8 ">
          <EditProfileInputContainer>
            <CustomInput
              name={"LinkdinProfile"}
              label={"لینک LinkedIn"}
              type={"text"}
            >
              <IoCall />
            </CustomInput>
          </EditProfileInputContainer>
          <EditProfileInputContainer>
            <CustomInput
              name={"TelegramLink"}
              label={"لینک Telegram"}
              type={"text"}
            >
              <IoCall />
            </CustomInput>
          </EditProfileInputContainer>
          <EditProfileTextAreaContainer>
            <CustomInput name={"UserAbout"} label={"درباره من"} type={"text"}>
              <IoCall />
            </CustomInput>
          </EditProfileTextAreaContainer>
        </div>
      </CustomForm>
    </>
  );
};
export { SocialInfo };
