import React, { useState } from "react";

/** Search Form for both company and job */

function SearchForm({ search }) {
  const [data, setData] = useState("");

  function handleChange(evt) {
    setData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(data);
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
