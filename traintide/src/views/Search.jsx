import React from "react";
import './styles/Search.scss';

const Search = () => {
    return (
        <div className="search">
            <h1>Search</h1>
            <p>Search for members, trainers, routines, and more!</p>
            <form>
                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;