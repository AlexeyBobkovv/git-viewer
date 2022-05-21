import React from "react";
import "./user.css";

import BodyUserInfo from "./Info/Info";
import BodyUserRepos from "./Repos/Repos";

export default function BodyUserMain({ userInfo, userRepos }) {
  return (
    <div className="user-git">
      <BodyUserInfo userInfo={userInfo} />
      <BodyUserRepos
        userRepos={userRepos}
        pagesLength={userInfo.public_repos}
      />
    </div>
  );
}
