import React, { useEffect, useState } from "react";
import "./UserSearch.css";

export default function UserSearch({ setSearch, fetchUser }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        setSearch(searchValue);
        e.preventDefault();
        fetchUser();
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
