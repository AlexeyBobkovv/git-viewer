import React from "react";

const REPO_PER_PAGE = 4;

function calcNumOfLastEl(lastElNum, pageOffset, pagesLength) {
  lastElNum = (pageOffset + 1) * REPO_PER_PAGE;
  if (lastElNum > pagesLength) {
    return pagesLength;
  }
  return lastElNum;
}

export default function NavItem({ pageOffset, pagesLength }) {
  let lastElNum;
  const firstElNum = pageOffset * REPO_PER_PAGE + 1;

  const navInfo = `${firstElNum}-${calcNumOfLastEl(
    lastElNum,
    pageOffset,
    pagesLength
  )} of ${pagesLength} items`;
  return (
    <div className="repos__page-index">
      <p>{navInfo}</p>
    </div>
  );
}
