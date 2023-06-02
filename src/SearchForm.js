import React, { useState } from "react";

/** Search Form for both company and job
 *
 *props: search: it's a function that accepts a searchTerm as a argument
 *
 *state: keep track of input data
 *
 * JobList, CompanyList => SearchForm
*/
function SearchForm({ search }) {
  const [data, setData] = useState("");

  function handleChange(evt) {
    setData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(data || undefined);
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <input value={data} onChange={handleChange} />
        <button className="mx-2 btn btn-primary btn-sm">Search!</button>
      </form>
    </div>
  );
}
// end

export default SearchForm;
