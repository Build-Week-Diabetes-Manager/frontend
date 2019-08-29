import React from "react";
import { Card } from 'semantic-ui-react';

export default function NutriCard(el) {
  const { name, id } = el;
  // const id = props.match.params.id;

  console.log("el: ", el[0]);
//   console.log("Name: ", el.character.name);

  return (
      <div>
        {/* <h2> Name: {el.item.name} </h2> */}
      </div> 
  )
}