import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { ProfilePics } from "./ProfilePics";
import { ChangePass } from "./ChangePass";

const EditProfileTabHandler = () => {
  const [tab, setTab] = useState("PersonalInfo");

  const handleTab = (to) => {
    setTab(to);
  };

  const tabComponent = (tab) => {
    switch (tab) {
      case "PersonalInfo":
        return <PersonalInfo />;

      case "ProfilePics":
        return <ProfilePics />;

      case "ChangePass":
        return <ChangePass />;
    }
  };

  return tabComponent(tab);
};

export { EditProfileTabHandler };
