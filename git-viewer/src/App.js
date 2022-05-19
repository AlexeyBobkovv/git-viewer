import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import userService from "./API/userService";
import { useFetching } from "./hooks/useFetching,";
import { getPageCount } from "./utils/pages";

function App() {
  const [search, setSearch] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userRepos, setUserRepos] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [pageCondition, setPageCondition] = useState({
    isLoading: false,
    isError: false,
  });

  const [fetchUser, isLoading, isError] = useFetching(async () => {
    const response = await userService.getUserInfo(search);
    setUserInfo(response);
    const userResponse = await userService.getUserRepos(search);
    setTotalPages(getPageCount(userResponse.reposListLength));
    setUserRepos(userResponse);
  });

  useEffect(() => {
    setPageCondition({ isLoading, isError });
  }, [isLoading, isError, setPageCondition]);

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
