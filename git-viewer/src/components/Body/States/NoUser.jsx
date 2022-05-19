import React from "react";
import userIcon from "../../../assets/icons/user-icon.svg";

export default function BodyStateNoUser() {
  return (
    <div className="main-content__states main-content__states_no-user">
      <img src={userIcon} alt="user-logo" />
      <p> User not found </p>
    </div>
  );
}
