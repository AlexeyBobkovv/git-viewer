import React, { useState } from "react";
import "./User.css";

import BodyUserInfo from "./Info/Info";
import BodyUserRepos from "./Repos";

export default function BodyUserMain({ userInfo }) {
  const [count, setCount] = useState(0);

  return (
    <div className="user-git">
      <BodyUserInfo userInfo={userInfo} />
      <BodyUserRepos />
    </div>
  );
}
