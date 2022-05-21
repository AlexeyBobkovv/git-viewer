import React, { useState } from "react";
import "./search.css";

export default function UserSearch({ setSearch, fetchUser }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        setSearch(searchValue);
        e.preventDefault();
        fetchUser(searchValue);
      }}
    >
      <button type="button"></button>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Enter GitHub username"
      />
    </form>
  );
}
