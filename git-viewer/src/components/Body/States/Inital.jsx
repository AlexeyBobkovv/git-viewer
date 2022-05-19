import React from "react";
import searchIcon from "../../../assets/icons/search-icon.svg";

export default function BodyStateInitial() {
  return (
    <div className="main-content__states main-content__states_initial">
      <img src={searchIcon} alt="search-logo" />
      <p> Start with searching a GitHub user </p>
    </div>
  );
}
