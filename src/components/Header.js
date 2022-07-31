import React from "react";
import Search from "./Search";

function Header({onFilteredListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilteredListings={onFilteredListings}/>
    </header>
  );
}

export default Header;
