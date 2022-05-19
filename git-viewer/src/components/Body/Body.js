import React, { useState } from "react";
import "./style.css";

import BodyStateInitial from "./States/Inital";
import BodyStateNoUser from "./States/NoUser";
import Loader from "../UI/Loader/Loader";

export default function Body({ userInfo, pageCondition }) {
  console.log("pageCondition :>> ", pageCondition);
  return (
    <main className="main-content">
      {!pageCondition.isError && !pageCondition.isLoading && (
        <BodyStateInitial />
      )}
      {pageCondition.isError && !pageCondition.isLoading && <BodyStateNoUser />}
      {pageCondition.isLoading && <Loader />}
    </main>
  );
}
