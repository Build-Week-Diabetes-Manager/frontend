import React, {useState} from "react";
import axios from "axios";
import { Card } from 'semantic-ui-react';

export default function NutriCard(props) {
const [nbdnoFood, setNbdnoFood]= useState('')

  console.log(nbdnoFood)

  
  axios
  .get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${props.item.ndbno}&type=f&format=json&api_key=dCI2jG9Xjje6T5rvhUL09LQFpjRn5zM67aLtYIu7`)
  .then(res =>
  
    setNbdnoFood(res.data.report.food)
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