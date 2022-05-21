import React, { useState } from "react";

export default function NavItem({ pageOffset, pagesLength }) {
  let lastElNum;
  const firstElNum = pageOffset * 4 + 1;

  function calcNumOfLastEl() {
    lastElNum = (pageOffset + 1) * 4;
    if (lastElNum > pagesLength) {
      return pagesLength;
    }

    return lastElNum;
  }

  const navInfo = `${firstElNum}-${calcNumOfLastEl()} of ${pagesLength} items`;
  return (
    <div className="repos__page-index">
      <p>{navInfo}</p>
    </div>
  );
}
