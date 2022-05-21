import React, { useState } from "react";

import "./repos.css";

import UserRepoList from "./List";
import Paginate from "../../../UI/paginate/Paginate";
import EmptyReposList from "./Empty";

export default function BodyUserRepos({
  userRepos,
  fetchUser,
  pagesLength,
  pageOffset,
  setPageOffset,
}) {
  const [repositories, setRepositories] = useState([]);
  return (
    <div className="user-git__repos repos">
      {pagesLength !== 0 ? (
        <>
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
        </>
      ) : (
        <EmptyReposList />
      )}
    </div>
  );
}
