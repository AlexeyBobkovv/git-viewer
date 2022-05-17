import React, { useState } from "react";
import "./UserSearch.css";
import searchIcon from "../../../assets/icons/search-icon.svg";

export default function UserSearch() {
  // const [count, setCount] = useState(0);

  return (
    <form>
      {/* <form onSubmit={this.handleSubmit}> */}
      <button type="submit">
        {/* <img src={searchIcon} alt="search-icon" /> */}
      </button>
      <input
        type="text"
        // value={this.state.value}
        placeholder="Enter GitHub username"
      />
    </form>
  );
}
