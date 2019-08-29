import React, { useEffect, useState } from "react";
import axios from "axios";
import NutriCard from "./NutriCard.js";
import SearchBar from "./SearchBar.js";

// USDA Food Composition Databases
// https://developer.nrel.gov/api/
// Started to build a nutrience report from https://ndb.nal.usda.gov/ndb/

//api_key dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7

// https://api.nal.usda.gov/ndb/nutrients/?format=json&dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7&nutrients=205&nutrients=204&nutrients=208&nutrients=269

// seems like to much effort

export default function NutriList() {
    const [key, setKey] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        
            axios
            .get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7&nutrients=204')
            .then( resp => {
                setKey(resp.data.report.foods);
                setLoading(false);
                // console.log("resp: ", resp.data.report.foods[0]);
            })
            .catch( error =>{
                console.log("Axios Err: ", error);
            })
        
    },[])


    // Search Bar Functionality IN PROGRESS NEED TO DEBUG, 
    // Need to find right place to place ${searchValue} into api url

    // const search = searchValue => {
    //     setLoading(true);
    //     setErrorMessage(null);
    

    //    axios
    //     .get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7&nutrients=${searchValue}')
    //     .then( response => {
    //         if(response.response === "True") {
    //             setFood(response.Search);
    //             setLoading(false);
    //         } else {
    //             setErrorMessage(response.Error);
    //             setLoading(false);
    //         }
    //     });
    // };


    return(
        <div>
            <SearchBar />
            <div className="nutriList">
                    {key.map(el => (
                    <NutriCard key={el.id} item={el} />
                    ))}
            </div> 

            {/* SearchBar in progress need to debug */}
    {/* <div>
            <SearchBar search={search} />
            <div> 
                {loading && !errorMessage ?(
                    <span>loading... </span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage} </div>
                ) : (
                <div className="nutriList">
                    {food.map(el => (
                    <NutriCard key={el.id} item={el} />
                    ))}
                </div> 
                )
                }   
            </div> */}
        </div>
    )
}