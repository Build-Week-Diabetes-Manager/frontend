import { Grid } from "@material-ui/core";
import axiosWithAuth from "../utils/axiosWithAuth";
import colors from "./colors";

import React, { useState, useEffect } from "react";
import TestDoughnut from "./charts/ChartThree";
import TestLine from "./charts/ChartTwo.js";
import UserInput from "./glucoseLevelInputForm/UserInput";

// import "../components/charts/charts.scss"

const GraphContainer = () => {
	const [graphData, setGraphData] = useState({});
	const [newData, setNewData] = useState({});
	const [userData, setUserData] = useState([]);
	const [predData, setPredData] = useState([]);
	const id = localStorage.getItem("user_id");


	useEffect(() => {
		console.log("Pre API Call", newData)
		axiosWithAuth()
			.get(`https://diabetesmanager.herokuapp.com/api/manager/ds/${id}`)
			.then( (res) => {
				console.log("ds response", res);
				let temp = Object.values(res.data)
				temp.forEach(el =>{
					predData.push(Math.floor(el))
				})
				axiosWithAuth()
				.get(`https://diabetesmanager.herokuapp.com/api/manager/${id}`)
				.then((res) => {
					// console.log("user data", res);
					console.log("After API call", newData);
					res.data.forEach(el => {
						userData.push(el.value)
					});
					setNewData({
						labels:[
							'pre-breakfast',
							'post-breakfast',
							'pre-lunch',
							'post-lunch',
							'pre-supper',
							'post-supper',
						],
						datasets: [
							{
								label: "Predicted Glucose Levels",
								fill: false,
								lineTension: 0.5,
								backgroundColor: colors.skyblue,
								borderColor: colors.skyblue,
								borderCapStyle: "butt",
								borderDash: [],
								borderDashOffset: 1,
								borderJoinStyle: "miter",
								pointBorderColor: "rgba(75,192,192,1)",
								pointBackgroundColor: "#fff",
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: "rgba(75,192,192,1)",
								pointHoverBorderColor: "rgba(220,220,220,1)",
								pointHoverBorderWidth: 2,
								pointRadius: 1,
								pointHitRadius: 10,
								data: predData,
							},
							{
								label: `User's Glucose Level`,
								fill: false,
								lineTension: 0.1,
								backgroundColor: "#666",
								borderColor: "#666",
								borderCapStyle: "butt",
								borderDash: [],
								borderDashOffset: 0.0,
								borderJoinStyle: "miter",
								pointBorderColor: "#666",
								pointBackgroundColor: "#fff",
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: "#666",
								pointHoverBorderColor: "rgba(220,220,220,1)",
								pointHoverBorderWidth: 2,
								pointRadius: 1,
								pointHitRadius: 10,
								data: userData,
							},
						],
					});
	
				})

		
				.catch((err) => console.log("axios err: ", err));
			})
			// .then(getData())
			.catch((err) => console.log("axios err: ", err));

	}, []);

	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get(`https://diabetesmanager.herokuapp.com/api/manager/manage/ds/1`)
	// 		.then((res) => {
	// 			setGraphData(res.data);
	// 		})
	// 		.catch((err) => console.log("axios err: ", err));
	// }, []);

	// return (
	// 	<Grid container spacing={3}>
	// 		<Grid item className="graph-one" sm={12} lg={6} >
	// 			<TestDoughnut />
	// 		</Grid>

	// 		<Grid item className="graph-two "sm={12} lg={6}>
	// 			<TestLine />
	// 		</Grid>

	// 		<Grid item className="user-input" sm={12} lg={12}>
	// 			<h2>Blood Glucose Level Input </h2>
	// 			<h4>
	// 				{" "}
	// 				Please input your glucose measurement and the time you took the measurement
	// 				below.{" "}
	// 			</h4>
	// 			<p className=""> </p>
	// 			<UserInput />
	// 		</Grid>
	// 	</Grid>
	// );

	return (
		<>
			<div className='grid-item-one'>
				<TestDoughnut userData={userData} predData={predData}/>
			
			</div>
			<div className='grid-item-two'>
			<TestLine newData={newData} predData={predData} userData={userData} />
			</div>
			<div className='grid-item-three'>
			<h2>Blood Glucose Level Input </h2>
			<h4>
				{" "}
				Please input your glucose measurement and the time you took the measurement
				below.{" "}
			</h4>
			<p className=""> </p>
			<UserInput />
			</div>
		</>
	);
};

export default GraphContainer;
