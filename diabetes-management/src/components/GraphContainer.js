import React from 'react';
import TestDoughnut from './ChartThree.js'
import TestLine from './ChartTwo.js';


const GraphContainer = () =>{

    return (
        <>
            <div className="container-one"> 
                <TestDoughnut />
            </div>

            <div className="container-two"> 
            <TestLine />
            </div>
        </>
    )
}

export default GraphContainer;