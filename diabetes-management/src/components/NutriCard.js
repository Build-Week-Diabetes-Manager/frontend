import React from "react";
import { Card } from 'semantic-ui-react';

export default function NutriCard(props) {


  // console.log("el: ", props.item.nutrients);

  axios
  .get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${props.item.ndbno}&type=f&format=json&api_key=DEMO_KEY`)
  .then(res =>
    console.log(res)
    )

  return (
      <div className="nutriCard" key={props.item.name}>
        <h2> Name: {props.item.name} </h2>
        <h3> NDBNO: {props.item.ndbno} </h3>
        {/* <p> Serving Size: { props.item.measure} </p>
        <h3> Nutrients</h3>
        <p> Calories: {el.item.nutrients[0].value} {el.item.nutrients[0].unit} </p> */}
        {/* <p>{el.item.nutrients[1].nutrient}: {el.item.nutrients[1].value} {el.item.nutrients[1].unit} </p>
        <p>{el.item.nutrients[2].nutrient}: {el.item.nutrients[2].value} {el.item.nutrients[2].unit} </p>
        <p>{el.item.nutrients[3].nutrient}: {el.item.nutrients[3].value} {el.item.nutrients[3].unit} </p> */}

        <h5> Data Provided by:</h5>
        <p> U.S. Department of Agriculture</p>

      </div> 
  )
}