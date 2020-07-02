import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getData, getUserBGL } from "../../actions/dataActions";
import colors from "../colors";



export const TestLine = (props) => {
	const [newData, setNewData] = useState({});

	let { getData, chartData, getUserBGL, userBGLData } = props;

	let bglArray = Object.values(chartData);
	const [predictedData, setPredictedData] = useState(bglArray);


	const glucoseLineChart = () => {

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
					data: predictedData,
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
					data: userBGLData,
				},
			],
		});
	};


	const handleRefresh =() =>{
		getData();
		getUserBGL();
	}
	useEffect(() => {
		getData();
		getUserBGL();
	},[]);

	useEffect(() => {
		setPredictedData(bglArray);
	},[chartData])

	useEffect(() => {
		glucoseLineChart();
	}, [predictedData]);

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
			<button onClick={handleRefresh}>Refresh</button>
		</div>
	);
};


function mapStateToProps(state){
	return{
		chartData: state.dataReducer.diadata,
		userBGLData: state.dataReducer.userBGLData,
	}
}

export default connect(mapStateToProps, {getData, getUserBGL})(TestLine);
