import React from 'react'
import assets from '../../assets'

const SearchBar = (props) => {
    return (
        <div className = "search-bar">
            <span className = "search-img">
                <img src = {assets.search}/>
            </span>
            <div className = "search-bar-input-container">
                <input 
                    className = "none-border-input"
                    type = "text"
                    name = "query" />
            </div>
            <div className = "Line"></div>
            <div className = "search-bar-country-container">
                <div  className = "country-name">New York, Nj</div>
            </div>
            <div className = "search-btn-container">
                <button className = "btn ola-btn-primary search-btn">Search</button>
            </div>
        </div>
    )
}

export default SearchBar
