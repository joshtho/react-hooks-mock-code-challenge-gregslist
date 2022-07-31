import React, { useState } from "react";

function Search({onFilteredListings}) {
  const [searched, setSearched] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();
    onFilteredListings(searched)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
