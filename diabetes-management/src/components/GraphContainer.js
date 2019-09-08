import React,{useState, useEffect} from 'react';
import TestDoughnut from './ChartThree.js'
import TestLine from './ChartTwo.js';
import UserInput from './UserInput.js';
import axiosWithAuth from '../utils/axiosWithAuth';


const GraphContainer = () =>{
const [graphData, setGraphData] =useState({});

useEffect(() => {
    axiosWithAuth().get(`https://diabetesmanager.herokuapp.com/api/manager/manage/ds/1`)
    .then(res =>{
        setGraphData(Object.values(res.data))

    })
    .catch(err => console.log("axios err: ", err))
}, [])

      
    

    return (
        <>
            <div className="container-one"> 
                <TestDoughnut />
            </div>

            <div className="container-two"> 
            <TestLine dglevels={graphData} />
                <button className="button-style-1" > Prediction My BGL</button>
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