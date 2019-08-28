import React, {useState} from 'react'
import {  Route, NavLink } from "react-router-dom";
import { TabContainer, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TestDoughnut from './ChartThree.js'
import TestLine from './ChartTwo.js';

const Dashboard = () => {
    const [tab, setTab] = useState();


    return (
    <div className="Container dashboard-container">  
        <TabContainer  defaultActiveKey="home">
            <Row>
             <Col>
                <Nav className="flex-column">
                    <div className="icon-container">
                        {/*Diabetes Manager Logo */}
                        <img className="icon logo" src={require('../img/dashboardIcons/Logo1.svg')}/>

                        {/* Normal way - This way works but I dont like it  */}
                        {/* <NavLink exact to="/" className="iconLinks">
                        <img className="icon" src={require('../img/dashboardIcons/homeIcon1.svg')}/>
                        </NavLink>
                        <NavLink exact to="/graph" className="iconLinks">
                        <img className="icon" src={require('../img/dashboardIcons/graphIcon.svg')}/> 
                        </NavLink> */}


                        {/* Using React-bootstrap Tab method */}
                        {/* Display graphs when home icon is selected, this pane should open by default first */}
                        <Nav.Item>
                            <Nav.Link eventKey="home"> <img className="icon" src={require('../img/dashboardIcons/homeIcon1.svg')}/> </Nav.Link>
                        </Nav.Item>

                         {/* Display graphs when graph icon is selected */}
                        <Nav.Item>
                            <Nav.Link eventKey="graphs"> <img className="icon" src={require('../img/dashboardIcons/graphIcon.svg')}/> </Nav.Link>
                        </Nav.Item>
                        
                    </div>
                </Nav>
             </Col>
            </Row>
         

            <Row className="row-2">
             <Col>
                <div className="view-wrapper">

                    <div className="top-bar">
                        <h4>Hello User</h4>
                    </div>
                    <Tab.Content>
                        <div className="view-container">
                            <div className="component-container">

                                {/* Normal way - This way works but I dont like it  */}
                                {/* <Route exact path="/" component={TestDoughnut} />
                                <Route path="/graph" component={TestLine}  /> */}

                                
                                {/* Using React-bootstrap Tab method */}
                                {/* Display graphs when home icon is selected, this pane should open by default first */}                
                                <Tab.Pane active eventKey="home">
                                    <h1>Home Page</h1> 
                                    <p>Display graphs when home icon is selected, this pane should open by default first </p>
                                </Tab.Pane>

                                {/* Display graphs when graph icon is selected */}
                                <Tab.Pane eventKey="graphs">
                                    <div className="container-one"> 
                                      <TestDoughnut />
                                    </div>

                                    <div className="container-two"> 
                                      <TestLine />
                                    </div>
                                </Tab.Pane>

                            </div>
                        </div>
                    </Tab.Content>

                </div>
             </Col>
            </Row>
        </TabContainer> 
    </div>

    )
}
export default Dashboard