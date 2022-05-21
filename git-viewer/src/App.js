import React, { useState, useEffect, useCallback } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import userService from "./API/userService";
import { useFetching } from "./hooks/useFetching,";

function App() {
  const [search, setSearch] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userRepos, setUserRepos] = useState();
  // const [pageOffset, setPageOffset] = useState(0);

  const [pageCondition, setPageCondition] = useState({
    isLoading: false,
    isError: false,
  });

  console.log("object :>> ");

  // const pageInfo = {
  //   pageOffset: pageOffset,
  //   setPageOffset: setPageOffset,
  // };

  const [fetchUser, isLoading, isError] = useFetching(async () => {
    const response = await userService.getUserInfo(search);
    setUserInfo(response);

    // const userReposResponse = await userService.getUserRepos(
    //   search,
    //   pageOffset
    // );
    // setUserRepos(userReposResponse);
  });

  // const memoizedCallback = useCallback(() => {
  //   console.log("callback :>> ");
  //   fetchUser();
  // }, [pageOffset]);

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
        // fetchUser={memoizedCallback}
        // pageOffset={pageOffset}
        // setPageOffset={setPageOffset}
      />
    </div>
  );
}

export default App;
