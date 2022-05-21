import React, { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";

import NavItem from "./NavItem";
import "./paginate.css";
import userService from "../../../API/userService";

function Paginate({ setRepositories, pagesLength }) {
  const [pageCount, setPageCount] = useState(0);
  const [apiError, setApiError] = useState(null);
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    async function name() {
      const userReposResponse = await userService.getUserRepos(
        "gaearon",
        pageOffset
      );
      const responseJson = await userReposResponse.clone().json();
      if (!userReposResponse.ok) {
        setApiError(responseJson.message);
        setRepositories([]);
        setPageCount(0);
        console.log("not ok? :>> ");
        return;
      }
      setRepositories(responseJson);
      setPageCount(Math.ceil(pagesLength / 4));
    }

    name();
  }, [pageOffset]);

  const handlePageChange = (event) => {
    console.log("event.selected :>> ", event.selected);
    // TODO Only change displayed selected page
    // when its content is loaded in useEffect.
    setPageOffset(event.selected);
  };

  return (
    <>
      {pageCount !== 0 && (
        <div className="repos__pagination">
          <NavItem pageOffset={pageOffset} pagesLength={pagesLength} />
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-button"
            previousLinkClassName="page-link"
            nextClassName="page-button"
            nextLinkClassName="page-link"
            disabledClassName="disabled"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={pageOffset}
          />

          {apiError && (
            <div className="alert alert-danger" role="alert">
              {apiError}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default React.memo(Paginate);
