import React, { useState, useEffect } from "react";
import { TabContainer, Row, Col, Nav } from "react-bootstrap";
import GraphContainer from "./GraphContainer.js";
import DashHome from "./DashHome.js";

const Dashboard = () => {
	const [tab, setTab] = useState();
	const [home, setHome] = useState(true);
	const [message, setMessage] = useState("Welcome");

	const today = new Date();
	const hour = today.getHours();
	const minute = today.getMinutes();
	const period = hour >= 12 ? " PM" : " AM";

	useEffect(() => {
		if (hour < 12) {
			setMessage(`Good Morning, The time is ${hour}:${minute} ${period}`);
		} else if (hour > 12 && hour < 18) {
			setMessage(`Good Afternoon,The time is ${hour}:${minute} ${period}`);
		} else {
			setMessage(`Good Evening, The time is ${hour}:${minute} ${period}`);
		}
	}, []);

	return (
		<div className="Container dashboard-container">
			<TabContainer defaultActiveKey="home">
				<Row>
					<Col>
						<Nav className="flex-column">
							<div className="icon-container">

								<button className="icon-tab" onClick={() => setHome(true)}>
									<img
										className="icon"
										src={
											home
												? require("../../img/dashboardIcons/homeIcon-active.svg")
												: require("../../img/dashboardIcons/homeIcon1.svg")
										}
										alt="Food Nutrition finder"
									/>
								</button>

								<button className="icon-tab" onClick={() => setHome(false)}>
									<img
										className="icon"
										src={
											home
												? require("../../img/dashboardIcons/graphIcon.svg")
												: require("../../img/dashboardIcons/graphIcon-active.svg")
										}
										alt="Icon for Blood Glucose graphs"
									/>
								</button>
							</div>
						</Nav>
					</Col>
				</Row>

				<Row className="row-2">
					<div className="view-wrapper">
						<div className="top-bar">
							<h4 className="welcomeUserMessage">{message}</h4>
						</div>
						<div className="view-container">
							<div className="component-container">
								{home ? <DashHome /> : <GraphContainer />}
							</div>
						</div>
					</div>
				</Row>
			</TabContainer>
		</div>
	);
};
export default Dashboard;

// [{"hourstamp": "2000-10-10 8:10","code": 33,"value": 10.1,"user_id": 1},{"hourstamp": "2000-10-10 8:10","code": 59,"value": 100.1,"user_id": 1},{"hourstamp": "2000-10-10 12:10","code": 60,   "value": 180.1,"user_id": 1},{"hourstamp": "2000-10-10 20:10","code": 63,"value": 250.1,      "user_id": 1},{"hourstamp": "2000-10-10 23:10","code": 57,"value": 300.1,"user_id": 1},     {"hourstamp": "2000-10-11 8:10","code": 33,"value": 5.1,"user_id": 1},{"hourstamp": "2000-10-11 8:10","code": 59,"value": 150.1,"user_id": 1}]
