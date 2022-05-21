import React from "react";

function calcNumOfLastEl(lastElNum, pageOffset, pagesLength) {
  lastElNum = (pageOffset + 1) * 4;
  if (lastElNum > pagesLength) {
    return pagesLength;
  }
  return lastElNum;
}

export default function NavItem({ pageOffset, pagesLength }) {
  let lastElNum;
  const firstElNum = pageOffset * 4 + 1;

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
