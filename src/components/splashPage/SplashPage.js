import React from "react";
import "./SplashPage.scss";
import SignUp from "../Signup";
import { Container, Grid, Paper } from "@material-ui/core";
import TestLine from "../ChartTwo";

export function SplashPage() {
	return (
		<Grid container className="splashPageContainer" spacing={2}>
			<Grid item className="splashWelcomeNote" xs={12} md={7}>
				<h1 className="splashHeader"> Welcome to Insuline</h1>
				<p className="splashBody">
					Insuline is a mobile friendly dashboard built with ReactJS, Formik, and
					Chart.js.
				</p>
				<p className="splashBody">
					{" "}
					Using a data science model to predict a user's blood glucose levels over
					the next 24 hours.
				</p>
				<h4 className="disclaimer">
					{" "}
					This was built as a project, please don't rely solely on Insuline.
					Seriously, this was built in a week.
				</h4>

				<h2 className="splashHeader">How does it work?</h2>
				<Paper className="sampleGraph">
					<TestLine />
				</Paper>

				<p className="splashBody">
					Start adding your glucose levels through out the day and the Insuline model
					will start building a prediction model
				</p>

				<h4 className="disclaimer">
					For optimal results, enter data for at least 3 days for the most accurate
					predictions.
				</h4>
			</Grid>

			<Grid item className="signupContainer">
				<SignUp />
			</Grid>
		</Grid>
	);
}
