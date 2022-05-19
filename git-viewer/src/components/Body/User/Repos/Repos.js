import React, { useState } from "react";
import "./Repos.css";

import UserRepoList from "./List";

export default function BodyUserRepos({ userRepos }) {
  // if (!posts.length) {
  //   return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  // }

  return (
    <>
      <div className="user-git__repos repos">
        <div className="repos__heading">
          <h3 className="bold-text">
            Repositories <span>()</span>
          </h3>
        </div>
        <UserRepoList userRepos={userRepos} />
      </div>
    </>
  );
}
