import React, { useState } from "react";

import "./repos.css";

import UserRepoList from "./List";
import Paginate from "../../../UI/paginate/Paginate";

export default function BodyUserRepos({
  userRepos,
  fetchUser,
  pagesLength,
  pageOffset,
  setPageOffset,
}) {
  const [repositories, setRepositories] = useState([]);
  // if (!posts.length) {
  //   return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  // }
  return (
    <>
      <div className="user-git__repos repos">
        <div className="repos__heading">
          <h3 className="bold-text">
            Repositories <span>({pagesLength})</span>
          </h3>
        </div>
        <UserRepoList repositories={repositories} />
        <Paginate
          setRepositories={setRepositories}
          userRepos={userRepos}
          fetchUser={fetchUser}
          pagesLength={pagesLength}
          pageOffset={pageOffset}
          setPageOffset={setPageOffset}
        />
      </div>
    </>
  );
}
