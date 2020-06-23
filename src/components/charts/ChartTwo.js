import React, { useState, useEffect, Component } from "react";
import { Line } from "react-chartjs-2";
import colors from "../colors";
import axiosWithAuth from "../../utils/axiosWithAuth";

import {getData} from "../../actions/dataActions"

const testData = [60, 150, 200, 15, 88, 34];
const sampleUserData = [80, 90, 70, 64, 123];

export const TestLine = (props) => {
	const [newData, setNewData] = useState({});
	const [updateData, setUpdateData] = useState(false);
	const id = localStorage.getItem("user_id");
	// let userData = newData.datasets;
	// console.log(`userData: ${userData}`);

	const glucoseLineChart = () => {
		// console.log("Ping");
		setNewData({
			labels: [
				"Pre-Breakfast",
				"Post-Breakfast",
				"Pre-Lunch",
				"Post-Lunch",
				"Pre-Supper",
				"Post-Supper",
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
					data: testData,
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
					data: [50,200,300],
				},
			],
		});
	};



	useEffect(() => {
		axiosWithAuth()
			.get(`https://diabetesmanager.herokuapp.com/api/manager/manage/${id}`)
			.then((res) => {
				// console.log("user data", res);
				setNewData(
					newData,
					(newData.datasets[1].data = res.data.map((el) => el.value))
				);
			})
			// .then(getData())
			.catch((err) => console.log("axios err: ", err));
			axiosWithAuth()
				.get(`https://diabetesmanager.herokuapp.com/api/manager/manage/ds/1`)
				.then((res) => {
					// console.log("ds response", res);
					setNewData(newData, (newData.datasets[0].data = Object.values(res.data)));
				})
				.catch((err) => console.log("axios err: ", err));

	}, [updateData]);


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
