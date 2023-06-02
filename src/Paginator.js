import React, { useState } from "react";

/** Paginator
 *
 * props: items - rendered components (with key attribute)
 *
 * state: pageNum - the number of the page currently displayed
 *
 * JobCardList, CompanyList => Paginator
*/
function Paginator({ items, maxPageLength = 6 }) {
  const [pageNum, setPageNum] = useState(0);

  const maxPageNum = Math.ceil(items.length / maxPageLength);

  function getButtonIndices() {
    const pageIndexOffsets = [-1, 0, 1];

    const pageIndices = pageIndexOffsets.map(offset => pageNum + offset);

    return pageIndices.filter(index => index >= 0 && index < maxPageNum);
  }

  function buildButton(gotoPageNum) {
    return <button className="btn btn-secondary btn-sm"
      onClick={() => setPageNum(gotoPageNum)}
      disabled={gotoPageNum === pageNum}>
      {gotoPageNum + 1}
    </button>;
  }

  function buildButtons() {
    const buttonIndices = getButtonIndices();

    return (
      <div className="d-flex justify-content-center gap-2 m-2">
        {!buttonIndices.includes(0) && buildButton(0)}
        {getButtonIndices().map(index => buildButton(index))}
        {!buttonIndices.includes(maxPageNum - 1) && buildButton(maxPageNum - 1)}
      </div>
    );
  }

  function buildPages() {
    if (items.length === 0) {
      return <p>Sorry, no results found</p>;
    }

    if (items.length <= maxPageLength) {
      return items;
    }

    const startItemNum = pageNum * maxPageLength;
    const endItemNum = Math.min(items.length, (pageNum + 1) * maxPageLength);

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