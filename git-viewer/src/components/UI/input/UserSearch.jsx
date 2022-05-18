import React, { useState } from "react";
import "./UserSearch.css";
import searchIcon from "../../../assets/icons/search-icon.svg";

export default function UserSearch() {
  const [search, setSearch] = useState("");

  const makeRequest = (e) => {
    e.preventDefault();
    console.log("search :>> ", search);
  };

  return (
    <form>
      {/* <form onSubmit={this.handleSubmit}> */}
      <button type="submit" onClick={makeRequest}>
        {/* <img src={searchIcon} alt="search-icon" /> */}
      </button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        // value={this.state.value}
        placeholder="Enter GitHub username"
      />
    </form>
  );
}
