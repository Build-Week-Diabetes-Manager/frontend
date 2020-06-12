import React from "react";
import "./SplashPage.scss";
import SignUp from "../logInSignUp/Signup";
import Login from "../logInSignUp/Login";
import {
	Grid,
	Paper,
	AppBar,
	Tab,
	Tabs,
	Box,
	Typography,
} from "@material-ui/core";
import TestLine from "../charts/ChartTwo";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export function SplashPage() {
	const [value, setValue] = React.useState(0);
	const [login, setLogin] = React.useState(true);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const loginChooser = () => {
		if (login) {
			console.log( "state is: ", true)
			return <SignUp />;
		} else {
			return <Login />;
		}
	};

	return (
		<Grid container className="splashPageContainer" spacing={0}>
			<Grid item className="splashWelcomeNote" xs={12} md={7}>
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="Insuline Welcome and How Insuline works"
						variant="fullWidth"
						indicatorColor="primary"
						className="splashTabs"
					>
						<Tab className="splashTabs" label="Welcome To Insuline" />
						<Tab className="splashTabs" label="How it works" />
					</Tabs>
				</AppBar>

				<TabPanel value={value} index={0}>
					<h1 className="splashHeader"> Welcome to Insuline</h1>
					<p className="splashBody">
						Insuline is a mobile friendly dashboard meant to predict a diabetic user's
						blood glucose level over an extended period of time*. The project was
						built with ReactJS, Formik, and Chart.js.
					</p>
					<p className="splashBody">
						{" "}
						Working in hand with our data engineers, Insuline uses a data science
						model to predict a user's blood glucose levels over the next 24 hours.
					</p>
					<h4 className="disclaimer">
						{" "}
						Insuline was built as a proof of concept project and is not meant for
						medical use. Seriously, we built it in a week.
					</h4>
					<p className="splashBody">
						* 3 days worth of data is required for optimal predictions.
					</p>
				</TabPanel>

				<TabPanel value={value} index={1}>
					<h1 className="splashHeader">How Does Insuline Work?</h1>
					<Paper className="sampleGraph">
						<TestLine />
					</Paper>

					<p className="splashBody">
						Start adding your glucose levels through out the day and the Insuline
						model will start building a prediction model
					</p>

					<h4 className="disclaimer">
						For optimal results, enter data for at least 3 days for the most accurate
						predictions.
					</h4>
				</TabPanel>
			</Grid>

			<Grid item className="signupContainer">
				{loginChooser()}
			</Grid>
		</Grid>
	);
}
