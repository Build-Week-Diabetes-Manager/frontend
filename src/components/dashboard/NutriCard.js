import React from "react";

export default function NutriCard(props) {
  return (
      
      <div className='nutriCard' key={props.food.name}>
      <h2>{props.food.food.desc.name}</h2>
        <h1>Nutrition Facts</h1>
        <p>Serving size: Value per 100g</p>
      {props.food.food.nutrients.map(el => <h4 key={el.nutrient_id}>{el.name}: {el.value}{el.unit}</h4>)}
      </div>

     
  )
}