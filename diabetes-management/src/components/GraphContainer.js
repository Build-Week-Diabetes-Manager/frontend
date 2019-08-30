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
            </div>

            <div className="user-input"> 
            <p> Please input your glucose measurement and the time you took the measurement below </p>
                <UserInput  />
            </div>
        </>
    )
}

export default GraphContainer;