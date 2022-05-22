import React from "react";

import BodyStateInitial from "./Inital";
import BodyStateNoUser from "./NoUser";
import Loader from "../../UI/Loader/Loader";

function shouldShowInitialState(isError, isLoading, isUserInfo) {
  return !isError && !isLoading && !isUserInfo;
}

function shouldShowErrorNoUser(isError, isLoading) {
  return isError && !isLoading;
}

function shouldShowLoading(isLoading) {
  return isLoading;
}

export default function CallToPageState({ isError, isLoading, isUserInfo }) {
  if (shouldShowInitialState(isError, isLoading, isUserInfo)) {
    return <BodyStateInitial />;
  }

  if (shouldShowErrorNoUser(isError, isLoading)) {
    return <BodyStateNoUser />;
  }

  if (shouldShowLoading(isLoading)) {
    return <Loader />;
  }
}
