import React, { useEffect, useState } from "react";
import axios from "axios";
import NutriCard from "./NutriCard.js";
import SearchBar from "./SearchBar.js";

// USDA Food Composition Databases
// https://developer.nrel.gov/api/
// Started to build a nutrience report from https://ndb.nal.usda.gov/ndb/

//api_key dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7

// https://api.nal.usda.gov/ndb/nutrients/?format=json&dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7&nutrients=205&nutrients=204&nutrients=208&nutrients=269

// https://api.nal.usda.gov/ndb/search/?format=json&q=${searchValue}&sort=n&max=25&offset=0&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7 

export default function NutriList() {
    const [food, setFood] = useState([])

    const [searchValue, setSearchValue] = useState({searchTerm:"",})
    console.log("SearchValue", searchValue);

   const handleSearchInputChange = (event) => {
       setSearchValue({...searchValue, [event.target.name] : event.target.value });
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (event) => {
        event.preventDefault();
        
        axios
        .get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchValue.searchTerm}&sort=n&max=2&offset=0&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7 
        `)
        .then(res => {
            console.log(res.data.list);
            setFood(res.data.list.item)
        })

        .catch( err => {
            console.log("Axios Err:", err)
        }, [])
        
    }
   




    return(
        <>
        {/* SearchBar in progress need to debug */}
        <h2>Food Finder </h2>
        <p> Use our food finder to look up basic nutrient values</p>
        <div className="search-bar"> 
        <form className="search">
            <input name='searchTerm' value={searchValue.searchTerm} onChange={handleSearchInputChange} type="text" />
            <input className="button-style-1" onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
        </div>

            <div className="nutriList">
                {food.map(el => (
                <NutriCard key={el.id} item={el} ndbno={el.ndbno} />
                ))}
            </div> 

        </>

    )
}
