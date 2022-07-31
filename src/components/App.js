import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  function handleDeleteListing(deletedListing) {
    const newList = listings.filter(listing => listing.id !== deletedListing.id)
    setListings(newList)
  }

  function handleSearchBar(newSearch) {
    const searchedItems = listings.filter(listing => listing.description.includes(newSearch))
    setListings(searchedItems)
  }

  
  return (
    <div className="app">
      <Header onFilteredListings={handleSearchBar}/>
      <ListingsContainer listings={listings} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
