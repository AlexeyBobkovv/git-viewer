import React, { useState } from "react";
import searchIcon from "../../../assets/icons/search-icon.svg";

export default function BodyStateInitial() {
  // const [count, setCount] = useState(0);

  return (
    <div className="main-content__intial-state">
      <img src={searchIcon} alt="search-logo" />
      <p> Start with searching a GitHub user </p>
    </div>
  );
}
