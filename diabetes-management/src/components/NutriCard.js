import React from "react";
import { Card } from 'semantic-ui-react';

export default function NutriCard(el) {
  const { name, item, id } = el;

  console.log("el: ", el.item.nutrients);

  return (
      <div className="nutriCard" key={el.id}>
        <h2> Name: {el.item.name} </h2>
        <p> Serving Size: { el.item.measure} </p>
        <h3> Nutrients</h3>
        <p> Calories: {el.item.nutrients[0].value} {el.item.nutrients[0].unit} </p>
        {/* <p>{el.item.nutrients[1].nutrient}: {el.item.nutrients[1].value} {el.item.nutrients[1].unit} </p>
        <p>{el.item.nutrients[2].nutrient}: {el.item.nutrients[2].value} {el.item.nutrients[2].unit} </p>
        <p>{el.item.nutrients[3].nutrient}: {el.item.nutrients[3].value} {el.item.nutrients[3].unit} </p> */}

        <h5> Data Provided by:</h5>
        <p> U.S. Department of Agriculture</p>

      </div> 
  )
}