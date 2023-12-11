import React, { useState } from "react";
import { CustomForm } from "../../common/customElements/CustomForm";
import { CustomInput } from "../../common/customElements/CustomInput";
import { EditProfileInputContainer } from "./EditProfileInputContainer";
import { IoCall } from "react-icons/io5";
import { EditProfileTextAreaContainer } from "./EditProfileTextAreaContainer";
import { CustomCheckBox } from "../../common/customElements/CustomCheckBox";
import SelectOption from "../../common/customElements/SelectOption";
import { CustomButton } from "../../common/customElements";

const PersonalInfo = ({ initialValues, onSubmit }) => {
  const [gender, setGender] = useState(
    initialValues && initialValues.Gender ? "0" : "1"
  );

  const genderObject = [
    { id: 1, name: "مرد" },
    { id: 2, name: "زن" },
  ];

  return (
    <>
      {initialValues && (
        <CustomForm initialValues={initialValues} onSubmit={onSubmit}>
          <div className=" flex flex-wrap w-full justify-evenly pt-8 ">
            <EditProfileInputContainer>
              <div className="mb-9">
                <SelectOption
                  object={genderObject}
                  name={"جنسیت"}
                  initial={gender}
                />
              </div>
            </EditProfileInputContainer>

            <EditProfileInputContainer>
              <CustomInput name={"FName"} label={"نام"} type={"text"} />
            </EditProfileInputContainer>
            <EditProfileInputContainer>
              <CustomInput
                name={"LName"}
                label={"نام خانوادگی"}
                type={"text"}
              />
            </EditProfileInputContainer>
            <EditProfileInputContainer>
              <CustomInput
                name={"NationalCode"}
                label={"کد ملی"}
                type={"text"}
              />
            </EditProfileInputContainer>
            <EditProfileInputContainer>
              <CustomInput
                name={"BirthDay"}
                label={"تاریخ تولد"}
                type={"text"}
              />
            </EditProfileInputContainer>
            <EditProfileInputContainer>
              <CustomInput
                name={"LinkdinProfile"}
                label={"لینک LinkedIn"}
                type={"text"}
              />
            </EditProfileInputContainer>
            <EditProfileInputContainer>
              <CustomInput
                name={"TelegramLink"}
                label={"لینک Telegram"}
                type={"text"}
              />
            </EditProfileInputContainer>
            <EditProfileTextAreaContainer>
              <CustomInput
                name={"UserAbout"}
                label={"درباره من"}
                type={"text"}
              />
            </EditProfileTextAreaContainer>
          </div>
          <div className="px-5">
            <CustomButton message={"تایید"} />
          </div>
        </CustomForm>
      )}
    </>
  );
};

export { PersonalInfo };
