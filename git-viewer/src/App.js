import React, { useState } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  const [userInfo, setUserInfo] = useState();
  const [pageCondition, setPageCondition] = useState({
    isLoading: false,
    isError: false,
  });

  return (
    <div className="App">
      <Header setUserInfo={setUserInfo} setPageCondition={setPageCondition} />
      <Body userInfo={userInfo} pageCondition={pageCondition} />
    </div>
  );
}

export default App;
