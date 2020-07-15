import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import colors from "../colors";

const testData = [60, 150, 200, 15, 88, 34];
const sampleUserData = [80, 90, 70, 64, 123];

export const ExampleChart = (props) => {
	const [newData, setNewData] = useState({});
	const [updateData]  = useState();
	// const id = localStorage.getItem("user_id");

	const glucoseLineChart = () => {
		console.log("Ping");
		setNewData({
			labels: ["6 AM", "11 AM", "12 PM", "1 PM", "6 PM", "7 PM"],
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
					data: sampleUserData,
				},
			],
		});
	};

	useEffect(() => {
		glucoseLineChart();
	},[updateData])

	useEffect(() => {
		console.log("newData.datasets:", newData.datasets);

	},[newData.datasets])

	return (
		<div>
			<h2>Daily Mean Blood Glucose Levels</h2>
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
export default ExampleChart;
