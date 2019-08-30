import React from 'react';
import TestDoughnut from './ChartThree.js'
import TestLine from './ChartTwo.js';
import UserInput from './UserInput.js'


const GraphContainer = () =>{

    return (
        <>
            <div className="container-one"> 
                <TestDoughnut />
            </div>

            <div className="container-two"> 
            <TestLine />
                <button className="button-style-1"> Prediction My BGL</button>
            </div>

            <div className="user-input"> 
            <h2>Blood Glucose Level Input </h2>
            <h4> Please input your glucose measurement and the time you took the measurement below. </h4>
            <p className=""> </p>
                <UserInput  />
            </div>
        </>
    )
}

export default GraphContainer;