import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import SearchResultsList from './SearchResultsList'
import { useState } from 'react'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="searchBar">
            <input
                type="text"
                name="search"
                id="search"
                placeholder='Search movies...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button><MdOutlineSearch /></button>
            <SearchResultsList searchTerm={searchValue} setSearchValue={setSearchValue}/>
        </div>
        
    )
}

export default SearchBar