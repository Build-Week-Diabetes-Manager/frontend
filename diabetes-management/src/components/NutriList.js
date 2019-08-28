import React, { useEffect, useState } from "react";
import axios from "axios";
import NutriCard from "./NutriCard.js";

// USDA Food Composition Databases
// https://developer.nrel.gov/api/
// Started to build a nutrience report from https://ndb.nal.usda.gov/ndb/

// seems like to much effort

export default function NutriList() {
    const [key, setKey] = useState([]);

    useEffect(() => {
        
            axios
            // .get('https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=QjBnb0Nbxp5k6huDhFLuG5qUijWWSDoh7U3R2Vh7&location=Denver+CO')
            .get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
            .then( resp => {
                setKey(resp.data.report.foods)
                console.log("resp: ", resp.data.report.foods);
            })
            .catch( error =>{
                console.log("Axios Err: ", error);
            })
        
    },[])


    return(
        <div>
            {key.map(el => (
            <NutriCard key={el.id} item={el} />
            ))}
        </div>
    )
}