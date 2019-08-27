import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import TestLine from './ChartTwo.js';

const Dashboard = ()=> {


    return (
        <div className="Container dashboard-container">            
            <Row>
             <Col sm={1}>
                <div className="icon-container">
                <img className="icon logo" src={require('../img/dashboardIcons/Logo1.svg')}/>
                    
                    <button> <img className="icon" src={require('../img/dashboardIcons/homeIcon1.svg')}/> </button>

                    <button> <img className="icon" src={require('../img/dashboardIcons/graphIcon.svg')}/> </button>
                </div>
             </Col>
            </Row>

            <Row className="row-2">
             <Col sm={11}>
                <div className="view-wrapper">

                    <div className="top-bar">
                        <h4>Hello User</h4>
                    </div>

                    <div className="view-container">
                        <div className="component-container">
                            <div className="container-one"> 
                           
                            </div>

                            <div className="container-two"> 
                            <TestLine />
                            </div>
                        </div>
                    </div>

                </div>
             </Col>
            </Row>
        </div>

    )
}
export default Dashboard