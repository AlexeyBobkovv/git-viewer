import React, { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";

import NavItem from "./NavItem";
import "./paginate.css";
import userService from "../../../API/userService";

function Paginate({ setRepositories, pagesLength, userName }) {
  const [pageCount, setPageCount] = useState(0);
  const [apiError, setApiError] = useState(null);
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    async function setChosenPage() {
      const userReposResponse = await userService.getUserRepos(
        userName,
        pageOffset
      );
      const responseJson = await userReposResponse.clone().json();

      if (!userReposResponse.ok) {
        setApiError(responseJson.message);
        setRepositories([]);
        setPageCount(0);
        return;
      }

      setRepositories(responseJson);
      setPageCount(Math.ceil(pagesLength / 4));
    }

    setChosenPage();
  }, [pageOffset]);

  const handlePageChange = (event) => {
    setPageOffset(event.selected);
  };

  return (
    <>
      {pageCount !== 0 && (
        <div className="repos__pagination">
          <NavItem pageOffset={pageOffset} pagesLength={pagesLength} />
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="arrow-button arrow-button_left"
            previousLinkClassName="page-link"
            nextClassName="arrow-button arrow-button_right"
            nextLinkClassName="page-link"
            disabledClassName="disabled"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
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
