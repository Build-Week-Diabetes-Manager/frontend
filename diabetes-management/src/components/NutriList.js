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
const [error, setError]= useState(null)

   const handleSearchInputChange = (event) => {
       setSearchValue({searchTerm : event.target.value });
    }

    // .get(`https://api.nal.usda.gov/ndb/V2/reports?ndbno=${props.food.ndbno}&type=f&format=json&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7`)
    // const callSearchFunction = (event) => {
    //     event.preventDefault();

    //     axios
    //     .get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchValue.searchTerm}&sort=n&offset=0&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7 
    //     `)
    //     .then(res => {
    //         setFood(res.data.list.item)
    //     })
        
    // }
    // const callSearchFunction = (event) => {
    //     event.preventDefault();

    //     axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchValue.searchTerm}&sort=n&offset=0&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7`)
    //     .then((response) => {
    //       return response.data.list.item.map(el => axios.get(`https://api.nal.usda.gov/ndb/V2/reports?ndbno=${el.ndbno}&type=f&format=json&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7`) .then(res => {console.log(res)})); // using response.data
    //     })
   
        
    // }

    const callSearchFunction = (event) => {
        event.preventDefault();

        axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${searchValue.searchTerm}&sort=n&offset=0&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7`)
        .then(async response => {
            const newArr = response.data.list.item.map(el => el.ndbno)
            
          const res = await axios.get(`https://api.nal.usda.gov/ndb/V2/reports?ndbno=${newArr.join("&ndbno=")}&max=10&type=f&format=json&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7`);
            console.log(res.data.foods);
            setFood(res.data.foods)
            setError(null) // using response.data
        })
        .catch(err => {
            if(err){
                setError('Please enter a valid item')
            }
        }
         )
   
        
    }
   


    return(
        <>
        {/* SearchBar in progress need to debug */}
        <h2>Food Finder </h2>
        <p> Use our food finder to look up basic nutrient values</p>
        <div className="search-bar"> 
        <form className="search" onSubmit={callSearchFunction}>
            <input name='searchTerm' value={searchValue.searchTerm} onChange={handleSearchInputChange} type="text" />
            <input className="button-style-1" type="submit" value="SEARCH" />
        </form>
        </div>

            <div className="nutriList">
                {error? <h2 className='errorText'>Please be more specific</h2> :food.map(el => <NutriCard key={el.food.desc.ndbno} food={el} /> )}
               
            </div> 

        </>

    )
}
