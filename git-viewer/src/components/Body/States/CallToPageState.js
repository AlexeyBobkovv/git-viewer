import React from "react";

import BodyStateInitial from "./Inital";
import BodyStateNoUser from "./NoUser";
import Loader from "../../UI/Loader/Loader";

export default function CallToPageState({ isError, isLoading, isUserInfo }) {
  if (!isError && !isLoading && !isUserInfo) {
    return <BodyStateInitial />;
  }

  if (isError && !isLoading) {
    return <BodyStateNoUser />;
  }

  if (isLoading) {
    return <Loader />;
  }
}
