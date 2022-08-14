import ChangeProfile from "../ChangeProfile/ChangeProfile";
import ProfileForm from "../ProfileForm/ProfileForm";

import React from "react";

import "./ProfileEdit.css";

const ProfileEdit = () => {
  return (
    <div className="profileEdit">
      <h1>Setting</h1>
      <div className="profileEdit-body">
        <ChangeProfile />
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfileEdit;
