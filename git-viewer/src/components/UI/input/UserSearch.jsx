import React, { useEffect, useState } from "react";
import userService from "../../../API/userService";
import { useFetching } from "../../../hooks/useFetching,";
import "./UserSearch.css";

export default function UserSearch({ setUserInfo, setPageCondition }) {
  const [search, setSearch] = useState("");

  const [fetchUser, isLoading, isError] = useFetching(async () => {
    const response = await userService.getUserInfo(search);
    setUserInfo(response);
  });

  useEffect(() => {
    setPageCondition({ isLoading, isError });
  }, [isLoading, isError, setPageCondition]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchUser();
      }}
    >
      <button type="button"></button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Enter GitHub username"
      />
    </form>
  );
}
