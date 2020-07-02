import { Grid } from "@material-ui/core";

import React, { useState } from "react";
import TestDoughnut from "./charts/ChartThree";
import TestLine from "./charts/ChartTwo.js";
import UserInput from "./glucoseLevelInputForm/UserInput";

// import "../components/charts/charts.scss"

const GraphContainer = () => {
	const [graphData, setGraphData] = useState({});
	const id = localStorage.getItem("user_id");

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
			<TestDoughnut />
			</div>
			<div className='grid-item-two'>
			<TestLine />
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
