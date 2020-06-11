import React from "react";
import { Link } from "react-router-dom";

const token = localStorage.token;
// const welcomeMessage = localStorage.message;

function clearToken() {localStorage.clear(token)}

const homeDirector = () => {
	if (token) {
		return "/dashboard";
	} else {
		return "/";
	}
};

const loggedInNav = () => {
	if (token) {
		return (
			<div>
				{/* <h4> {welcomeMessage}</h4> */}
				<button onClick={clearToken()}> Log Out</button>
			</div>
		);
	}
};

export const MainNavbar = () => {
	return (
		<div className="navbar">
			<a href={homeDirector()}>
				<img
					className="mainLogo"
					src={require("../img/logo/mono-flat-logo.svg")}
					href="/"
					alt="Insuline Logo"
				/>
			</a>

			{loggedInNav()}
		</div>
	);
};

export default MainNavbar;
