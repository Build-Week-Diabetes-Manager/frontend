import React from "react";
import { Link } from "react-router-dom";
import { Modal, makeStyles } from "@material-ui/core";


function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export const MainNavbar = () => {
	const classes = useStyles();
	const token = localStorage.getItem('token');
	console.log("local storage: ", token);
	const [open, setOpen] = React.useState(false);
	const [modalStyle] = React.useState(getModalStyle);

	const clearToken = (props) => {
		setOpen(true);
		localStorage.clear(token);
		setTimeout( function() {window.location.href = "../"}, 1000);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const homeDirector = () => {
		if (token) {
			return "/dashboard";
		} else {
			return "/";
		}
	};

	const loggedInNav = () => {
		if (token) {
			console.log("Token is present");
			return (
				<div>
					{/* <h4> {welcomeMessage}</h4> */}
					<button onClick={clearToken}> Log Out</button>
				</div>
			);
		}
	};

	const logOffModal = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id="simple-modal-title">See You Next Time!</h2>
			<p id="simple-modal-description">
				Logging off...
			</p>
		</div>
	);

	return (
		<div className="navbar">
			<a href={homeDirector()}>
				<img
					className="mainLogo"
					src={require("../../img/logo/mono-flat-logo.svg")}
					alt="Insuline Logo"
				/>
			</a>

			{loggedInNav()}

			
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="Logged out message"
				aria-describedby="Logging out, Bye!"
			>
				{logOffModal}
			</Modal>
		</div>
	);
};

export default MainNavbar;
