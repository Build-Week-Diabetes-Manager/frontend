import React from 'react';
import NutriList from './NutriList.js';

const DashHome = () => {


  return(
    <div active eventKey="home">
        <h1>Home Page</h1> 
        <p>Display graphs when home icon is selected, this pane should open by default first </p>
        <NutriList />
    </div>
  )
}

export default DashHome;