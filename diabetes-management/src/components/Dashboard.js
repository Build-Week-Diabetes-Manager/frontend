import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = ()=> {


    return (
        <div className="Container dashboard-container">            
            <Row>
             <Col sm={1}>
                <div className="icon-container">
                    <p>Icon</p>
                    <button> home button </button>
                    <button> graph button </button>
                </div>
             </Col>
            </Row>

            <Row>
             <Col sm={11}>
                <div className="view-wrapper">

                    <div className="top-bar">
                        <h4>Diabetes Manager</h4>
                    </div>

                    <div className="view-container">
                        <h2>view container</h2>
                        <div className="component-container">
                            <div className="container-one"> Container 1</div>
                            <div className="container-two"> Container 2</div>
                        </div>
                    </div>

                </div>
             </Col>
            </Row>
        </div>

    )
}
export default Dashboard