import React from "react";

import notfoundIcon from "../../../../assets/icons/notfound-icon.svg";

export default function EmptyReposList() {
  return (
    <div className="user-git__states states states_empty-repos">
      <img src={notfoundIcon} alt="search-logo" />
      <p> Repository list is empty </p>
    </div>
  );
}
