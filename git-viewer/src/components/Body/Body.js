import React, { useState } from "react";
import "./Body.css";

import BodyStateInitial from "./States/Inital";
import BodyStateNoUser from "./States/NoUser";
import Loader from "../UI/Loader/Loader";
import BodyUserMain from "./User/UserMain";

export default function Body({ userInfo, pageCondition }) {
  console.log("pageCondition :>> ", pageCondition);
  return (
    <main className="main-content">
      <div className="main-content__wrapper">
        {/* {!pageCondition.isError && !pageCondition.isLoading && (
          <BodyStateInitial />
        )}
        {pageCondition.isError && !pageCondition.isLoading && (
          <BodyStateNoUser />
        )}
        {pageCondition.isLoading && <Loader />} */}
        {userInfo && <BodyUserMain userInfo={userInfo} />}
      </div>
    </main>
  );
}
