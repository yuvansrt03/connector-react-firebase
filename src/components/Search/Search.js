import React from 'react'
import SearchHeader from './SearchHeader'
import SearchItems from './SearchItems'
import './Search.css'
function Search() {
  return (
    <>
    <SearchHeader/>
    <div className="search-items-wrapper">
        <SearchItems/>
        <SearchItems/>
        <SearchItems/>
        <SearchItems/>
        <SearchItems/>
        <SearchItems/>
        <SearchItems/>
        <SearchItems/>
    </div>
    </>
  )
}

export default Search