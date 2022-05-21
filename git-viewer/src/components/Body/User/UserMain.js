import React from "react";
import "./User.css";

import BodyUserInfo from "./Info/Info";
import BodyUserRepos from "./Repos/Repos";

export default function BodyUserMain({
  userInfo,
  userRepos,
  fetchUser,
  pageOffset,
  setPageOffset,
}) {
  return (
    <div className="user-git">
      <BodyUserInfo userInfo={userInfo} />
      {/* {userRepos !== undefined && ( */}
      <BodyUserRepos
        userRepos={userRepos}
        fetchUser={fetchUser}
        pagesLength={userInfo.public_repos}
        pageOffset={pageOffset}
        setPageOffset={setPageOffset}
      />
      {/* )} */}
    </div>
  );
}
