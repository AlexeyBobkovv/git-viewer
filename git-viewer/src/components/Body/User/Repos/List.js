import React from "react";
import UserRepoItem from "./Item";

const UserRepoList = ({ userRepos }) => {
  return (
    <ul className="repos__list">
      {userRepos.jsonResponse.map((item) => {
        const { name, description, html_url } = item;
        const itemSetup = {
          name: name,
          description: description,
          url: html_url,
        };
        return <UserRepoItem itemSetup={itemSetup} key={name} />;
      })}
    </ul>
  );
};

export default UserRepoList;
