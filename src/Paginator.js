import React, { useState } from "react";

const MAX_PAGE_LENGTH = 7;

/** Paginator
 *
 * props: items - rendered components (with key attribute)
 *
 * state: pageNum - the number of the page currently displayed
 *
 * JobCardList, CompanyList => Paginator
*/
function Paginator({ items }) {
  const [pageNum, setPageNum] = useState(0);

  const maxPageNum = items.length / MAX_PAGE_LENGTH;

  function incrementPageNum() {
    setPageNum(curPage => curPage + 1);
  }

  function decrementPageNum() {
    setPageNum(curPage => curPage - 1);
  }

  function buildButtons() {
    return (
      <div className="d-flex justify-content-center gap-2 m-2">
        {pageNum > 0 && <button className="btn btn-secondary btn-sm" onClick={decrementPageNum}>Prev</button>}
        <button className="btn btn-secondary btn-sm" onClick={decrementPageNum} disabled>{pageNum + 1}</button>
        {pageNum < maxPageNum - 1 && <button className="btn btn-secondary btn-sm" onClick={incrementPageNum}>Next</button>}
      </div>
    );
  }

  function buildPages() {
    if (items.length === 0) {
      return <p>Sorry, no results found</p>;
    }

    if (items.length <= MAX_PAGE_LENGTH) {
      return items;
    }

    const startItemNum = pageNum * MAX_PAGE_LENGTH;
    const endItemNum = Math.min(items.length, (pageNum + 1) * MAX_PAGE_LENGTH);

    // make pages
    return (
      <>
        {items.slice(startItemNum, endItemNum)}

        {buildButtons()}
      </>);
  }

  return (
    <div>
      {buildPages()}
    </div>
  );
}

export default Paginator;