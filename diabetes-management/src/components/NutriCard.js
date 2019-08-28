import React from "react";
import { Card } from 'semantic-ui-react';

export default function NutriCard(el) {
  const { name, id } = el;
  // const id = props.match.params.id;

  console.log("el: ", el.name);
//   console.log("Name: ", el.character.name);

  return (
      <div>

      </div>
    // <div className="nutriCard ui card" key={el.character.id}>
    //   <img className="image" src={el.character.image} />
    //     <div className="content">
    //       <h2 className="header">Name: {el.character.name}</h2>
    //       <p className="meta">Species: {el.character.species}</p>
    //       <p className="meta">Status: {el.character.status}</p>
    //       <p className="meta">Gender: {el.character.gender}</p>
    //       <p className="meta">Location: {el.character.location.name}</p>
    //     </div>
    // </div>
  
  )
}