import React, {useState, useContext} from 'react'
import {  Route, NavLink } from "react-router-dom";
import { TabContainer, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TestDoughnut from './ChartThree.js'
import TestLine from './ChartTwo.js';
import NutriList from './NutriList.js';
import GraphContainer from './GraphContainer.js'; 
import DashHome from './DashHome.js';
import UserContext  from "../provider/UserProvider"

const Dashboard = () => {
    const [tab, setTab] = useState();
    const [home, setHome] =useState(true);
    // const {user} = useContext(UserContext)

    return (
    <div className="Container dashboard-container">  
        <TabContainer  defaultActiveKey="home">
            <Row>
             <Col>
                <Nav className="flex-column">
                    <div className="icon-container">
                        {/*Diabetes Manager Logo */}
                        <img className="icon logo" src={require('../img/dashboardIcons/Logo1.svg')}/>
        
                        
                        <button className='icon-tab' onClick={() => setHome(true)}><img className="icon" src={require('../img/dashboardIcons/homeIcon1.svg')}/></button>
                       
                      
                        <button className='icon-tab' onClick={() => setHome(false)}><img className="icon" src={require('../img/dashboardIcons/graphIcon.svg')}/></button>
                        
                        
                    </div>
                </Nav>
             </Col>
            </Row>
         

            <Row className="row-2">
                <div className="view-wrapper">

                    <div className="top-bar">
                    <h4> Hello User </h4>
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