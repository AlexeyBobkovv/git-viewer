import React from "react";
import "./user.css";

import BodyUserInfo from "./Info/Info";
import BodyUserRepos from "./Repos/Repos";

export default function BodyUserMain({ userInfo, search }) {
  return (
    <div className="main-content__wrapper">
      <div className="user-git">
        <BodyUserInfo userInfo={userInfo} />
        <BodyUserRepos pagesLength={userInfo.public_repos} search={search} />
      </div>
    </div>
  );
}
