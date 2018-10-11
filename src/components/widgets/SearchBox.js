import React from 'react'
import SearchBar from './SearchBar'
import SearchDropDownPanel from './SearchDropDownPanel'

const SearchBox = (props) => {
    return (
        <div className = "searchbox-container col-12">
            <SearchBar />
            <SearchDropDownPanel />
        </div>
    )
}

export default SearchBox