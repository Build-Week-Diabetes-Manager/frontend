import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import colors from "../colors";



const BarGraph = (props) => {
  const { chartData, userBGLData} = props;
  
  const [barData, setBarData] = useState({});
  const [userBarData, setUserBarData] = useState(Object.values(userBGLData))
  const lastBGL = userBarData[userBarData.length -1]

console.log(lastBGL)

	const barChart = () => {
		setBarData({
			labels: [],
			datasets: [
				{
					label: "Predicted Glucose Levels",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "#555",
					borderColor: colors.skyblue,
					borderCapStyle: "butt",
					borderDash: [],
					borderDashOffset: 0.0,
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
					data: [380],
				},
				{
					label: "Actual Glucose Level",
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
					data: lastBGL,
				},
			],
		});
  };
  
  useEffect(() => {
    barChart();
  },[userBarData])

	return (
		<div>
			<h2>Expected Mean Blood Glucose Level (mg/dl)</h2>
			<Bar
				data={barData}
        legend= {{
						position: "bottom",
        }}
			/>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		chartData: state.dataReducer.diadata,
		userBGLData: state.dataReducer.userBGLData,
	};
}

export default connect(mapStateToProps)(BarGraph);
