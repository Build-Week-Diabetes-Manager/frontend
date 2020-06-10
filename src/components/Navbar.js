import React from "react";
import { Link } from "react-router-dom";

const homeDirector = () => {
	if (localStorage.token) {
		return "/dashboard";
	} else {
		return "/";
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

			<div>
				<button> Log Out</button>
			</div>
		</div>
	);
};

export default MainNavbar;
