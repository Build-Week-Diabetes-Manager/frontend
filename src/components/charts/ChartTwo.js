import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axiosWithAuth from "../../utils/axiosWithAuth";
import colors from "../colors";

import { connect, subscribe, getState } from "react-redux";
import { getData } from "../../actions/dataActions";

const testData = [60, 150, 200, 15, 88, 34];
const sampleUserData = [80, 90, 70, 64, 123];

const objectToArray = (object) =>{
	console.log("object: ", object);
	let newArray = [];

    for(let i = 0; i in object; i++){
		console.log(object)
		newArray.push(object.value)
    }
}

export const TestLine = (props, chartData, getData ) => {
	const [newData, setNewData] = useState({});
	const [userData, setUserData] = useState(props.chartData);
	const [updateData, setUpdateData] = useState(false);
	const id = localStorage.getItem("user_id");
	
	
	

	const glucoseLineChart = () => {

		setNewData({
			labels: [
				"Undefined",
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
		props.getData();
	}, [updateData]);

	console.log("userData: ", userData);
	useEffect(() => {
		glucoseLineChart();
	}, [chartData]);

	
	// props.chartData.subscribe(() => {
	// 	console.log(props.chartData.getState())
	// })

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
			<button onClick={props.getData}>Refresh</button>
		</div>
	);
};


function mapStateToProps(state){
	return{
		chartData: state.dataReducer.diadata,
	}
}

export default connect(mapStateToProps, {getData})(TestLine);
