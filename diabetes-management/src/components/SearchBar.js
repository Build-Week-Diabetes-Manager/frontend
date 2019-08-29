import React, { useEffect, useState } from "react";


export default function SearchBar (props) {
    const [searchValue, setSearchValue] = useState("")

   const handleSearchInputChange = (event) => {
       setSearchValue(event.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (event) => {
        event.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input value={searchValue} onChange={handleSearchInputChange} type="text" />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
}