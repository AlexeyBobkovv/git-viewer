import React from "react";

export default function UserRepoItem({ itemSetup }) {
  const { name, description, url } = itemSetup;
  return (
    <li className="repos__item repo-item">
      <div className="repo-item__inner">
        <div className="repo-item__name">
          <a href={url} target="_blank" rel="noreferrer">
            {name}
          </a>
        </div>
        <div className="repo-item__description">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
