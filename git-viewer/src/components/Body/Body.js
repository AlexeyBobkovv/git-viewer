import React from "react";
import "./body.css";

import CallToPageState from "./States/CallToPageState";
import BodyUserMain from "./User/UserMain";

export default function Body({ userInfo, pageCondition, search }) {
  return (
    <main className="main-content">
      <CallToPageState
        isError={pageCondition.isError}
        isLoading={pageCondition.isLoading}
        isUserInfo={userInfo}
      />
      {userInfo && !pageCondition.isLoading && !pageCondition.isError ? (
        <BodyUserMain userInfo={userInfo} search={search} />
      ) : null}
    </main>
  );
}
