import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axiosWithAuth from "../../utils/axiosWithAuth";
import colors from "../colors";


const testData = [60, 150, 200, 15, 88, 34];
const sampleUserData = [80, 90, 70, 64, 123];

 const TestLine = (props) => {
	const id = localStorage.getItem("user_id");

	return (
		<div>
			<h2>Daily Mean Glucose Levels (mg/dl)</h2>
			<Line
				data={props.newData}
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
