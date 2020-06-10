import React from "react";
import { Link } from "react-router-dom";


export const MainNavbar = () => {
	return (
		<div className="navbar">
			<a href="/">
			<img
				className="mainLogo"
				src={require("../img/logo/mono-flat-logo.svg")}
				href="/"
				alt="Insuline Logo"
			/>
			</a>
    </div>
    /* **************************** */
	);
};

export default MainNavbar;