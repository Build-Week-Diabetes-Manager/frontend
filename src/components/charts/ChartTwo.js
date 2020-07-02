import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axiosWithAuth from "../../utils/axiosWithAuth";
import colors from "../colors";


const testData = [60, 150, 200, 15, 88, 34];
const sampleUserData = [80, 90, 70, 64, 123];

export const TestLine = (props) => {
	const [newData, setNewData] = useState({});
	const [userData, setUserData] = useState([]);
	const [predData, setPredData] = useState([]);


	const [updateData, setUpdateData] = useState();
	const id = localStorage.getItem("user_id");
	// console.log(`id: ${id}`);

	const glucoseLineChart = () => {
		console.log("Ping");

	};



	useEffect(() => {
		
		let emptyUser = [];
		let emptyPred = [];
		console.log("Pre API Call", newData)
		axiosWithAuth()
			.get(`https://diabetesmanager.herokuapp.com/api/manager/ds/${id}`)
			.then( (res) => {
				console.log("ds response", res);
				let temp = Object.values(res.data)
				temp.forEach(el =>{
					emptyPred.push(Math.floor(el))
				})
				axiosWithAuth()
				.get(`https://diabetesmanager.herokuapp.com/api/manager/${id}`)
				.then((res) => {
					// console.log("user data", res);
					console.log("After API call", newData);
					res.data.forEach(el => {
						emptyUser.push(el.value)
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
								data: emptyPred,
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
								data: emptyUser,
							},
						],
					});
				})
				.catch((err) => console.log("axios err: ", err));
			})
			// .then(getData())
			.catch((err) => console.log("axios err: ", err));

	}, []);


	useEffect(() => {
		glucoseLineChart();
	}, []);

	return (
		<div>
			<h2>Daily Mean Glucose Levels (mg/dl)</h2>
			<Line
				data={newData}
				options={{
					responsive: true,
				}}
				legend={{
					responsive: true,
					position: "bottom",
				}}
			/>
		</div>
	);
};
export default TestLine;
