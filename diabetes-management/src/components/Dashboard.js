import React, {useState, useContext, useEffect} from 'react'
import {  Route, NavLink } from "react-router-dom";
import { TabContainer, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TestDoughnut from './ChartThree.js'
import TestLine from './ChartTwo.js';
import NutriList from './NutriList.js';
import GraphContainer from './GraphContainer.js'; 
import DashHome from './DashHome.js';


const Dashboard = () => {
    const [tab, setTab] = useState();
    const [home, setHome] =useState(true);
    // const {user} = useContext(UserContext)

    
    const time = new Date().getHours() ;
    const [message, setMessage] = useState('Welcome')
    
    useEffect(() => {
        if(time < 12){
            setMessage('Good Morning')
        } else if (time > 12 && time < 18){
            setMessage('Good Afternoon')
        } else{
            setMessage('Good Evening')
        }
       
    }, [])
    return (
    <div className="Container dashboard-container">  
        <TabContainer  defaultActiveKey="home">
            <Row>
             <Col>
                <Nav className="flex-column">
                    <div className="icon-container">
                        {/*Diabetes Manager Logo */}
                        <img className="icon logo" src={require('../img/favicon/insulineIcon.svg')}/>
        
                        
                        <button className='icon-tab' onClick={() => setHome(true)}><img className="icon" src={require('../img/dashboardIcons/homeIcon1.svg')}/></button>
                       
                      
                        <button className='icon-tab' onClick={() => setHome(false)}><img className="icon" src={require('../img/dashboardIcons/graphIcon.svg')}/></button>
                        
                        
                    </div>
                </Nav>
             </Col>
            </Row>
         

            <Row className="row-2">
                <div className="view-wrapper">

                    <div className="top-bar">
                    <h4>{message}</h4>
                    
                        {/* <h4>{user.message}</h4> */}
                        {/* {console.log("USEEER", user)} */}
                    </div>
                    <div className="view-container">
                        <div className="component-container">
                            {home ? <DashHome/> : <GraphContainer/>}
                            {/* <Route exact path="/" component={DashHome} />
                            <Route path="/graph" component={GraphContainer}  /> */}
                        </div>
                    </div>


                </div>
            </Row>
        </TabContainer> 
    </div>

    )
}
export default Dashboard

// [{"timestamp": "2000-10-10 8:10","code": 33,"value": 10.1,"user_id": 1},{"timestamp": "2000-10-10 8:10","code": 59,"value": 100.1,"user_id": 1},{"timestamp": "2000-10-10 12:10","code": 60,   "value": 180.1,"user_id": 1},{"timestamp": "2000-10-10 20:10","code": 63,"value": 250.1,      "user_id": 1},{"timestamp": "2000-10-10 23:10","code": 57,"value": 300.1,"user_id": 1},     {"timestamp": "2000-10-11 8:10","code": 33,"value": 5.1,"user_id": 1},{"timestamp": "2000-10-11 8:10","code": 59,"value": 150.1,"user_id": 1}]