import React from "react";
import "./style.css";
import logo from "../../assets/icons/git-logo.svg";

import UserSearch from "../UI/input/UserSearch";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="git-logo" />
      </div>
      <div className="header__search">
        <UserSearch />
      </div>
    </header>
  );
}
