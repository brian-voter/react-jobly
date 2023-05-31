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
    setData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={data} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
}
// end

export default SearchForm;
