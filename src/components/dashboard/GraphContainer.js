import { Grid } from "@material-ui/core";
import React from "react";
import TestDoughnut from "../charts/ChartThree";
import TestLine from "../charts/ChartTwo.js";
import UserInput from "../glucoseLevelInputForm/UserInput";


const GraphContainer = () => {

	return (
		<Grid container spacing={2} >
			<Grid item className="graphs graph-one" sm={12} lg={6}>
				<TestDoughnut />
			</Grid>

			<Grid item className="graphs graph-two "sm={12} lg={6}>
				<TestLine />
			</Grid>

			<Grid item className="user-input" lg={12}>
				<h2>Blood Glucose Level Input </h2>
				<h4>
					{" "}
					Please input your glucose measurement and the time you took the measurement
					below.{" "}
				</h4>
				<p className=""> </p>
				<UserInput />
			</Grid>
		</Grid>
	);
};

export default GraphContainer;
