import React from "react";
import "./info.css";

import followersImg from "../../../../assets/icons/followers-icon.svg";
import followingImg from "../../../../assets/icons/following-icon.svg";

function thousandToK(num) {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num;
}

export default function BodyUserInfo({ userInfo }) {
  const { login, avatar_url, html_url, name, followers, following } = userInfo;

  return (
    <div className="user-git__info info">
      <div className="info__image">
        <img src={avatar_url} alt="user-img" />
      </div>
      <div className="info__text">
        <p className="info__name bold-text">{name}</p>
        <div className="info__login-wrap">
          <a
            className="info__login"
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            {login}
          </a>
        </div>
        <div className="info__follow-info">
          <div className="info__follow-type small-text">
            <img src={followersImg} alt="" />
            <p>
              <span>{thousandToK(followers)}</span> followers
            </p>
          </div>
          <div className="info__follow-type small-text">
            <img src={followingImg} alt="" />
            <p>
              <span>{thousandToK(following)}</span> following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
