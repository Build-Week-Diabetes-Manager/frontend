import { Grid } from "@material-ui/core";
import React,{useState} from "react";
import TestDoughnut from "../charts/ChartThree";
import TestLine from "../charts/ChartTwo.js";
import UserInput from "../glucoseLevelInputForm/UserInput";
import Paper from '@material-ui/core/Paper';




const GraphContainer = () => {
	return (
		<Grid container className="root" spacing={2} >
			<Grid item className="graphs graph-one" sm={12} lg={6}>
			<Paper className="paper"><TestDoughnut /></Paper>
				
			</Grid>

			<Grid item className="graphs graph-two "sm={12} lg={6}>
			<Paper className="paper"><TestLine /></Paper>
			</Grid>

			<Grid item className="user-input" lg={12}>
			<Paper className="paper">
			<h2>Blood Glucose Level Input </h2>
				<h4>
					{" "}
					Please input your glucose measurement and the time you took the measurement
					below.{" "}
				</h4>
				<p className=""> </p>
				<UserInput />
			</Paper>

			</Grid>
		</Grid>
	);
};

export default GraphContainer;
