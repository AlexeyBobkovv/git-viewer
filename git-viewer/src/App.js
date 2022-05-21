import React, { useState, useEffect, useCallback } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import userService from "./API/userService";
import { useFetching } from "./hooks/useFetching,";

function App() {
  const [search, setSearch] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userRepos, setUserRepos] = useState();

  const [pageCondition, setPageCondition] = useState({
    isLoading: false,
    isError: false,
  });

  const [fetchUser, isLoading, isError] = useFetching(async () => {
    const response = await userService.getUserInfo(search);
    setUserInfo(response);
  });

  useEffect(() => {
    setPageCondition({ isLoading, isError });
  }, [isLoading, isError]);

  return (
    <div className="App">
      <Header fetchUser={fetchUser} setSearch={setSearch} />
      <Body
        userInfo={userInfo}
        pageCondition={pageCondition}
        userRepos={userRepos}
      />
    </div>
  );
}

export default App;
