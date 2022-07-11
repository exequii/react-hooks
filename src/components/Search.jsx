import React from 'react'

const Search = ({search, searchInput, handleSearch}) => {

  return (
    <div>
        <input type='text' placeholder='Search' ref={searchInput} value={search} onChange={handleSearch}/>
        <button type='button'>Search</button>
    </div>
  )
}

export default Search