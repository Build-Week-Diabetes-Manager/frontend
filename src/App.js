import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/Signup.js";
import MainNavbar from "./components/Navbar";
import { SplashPage } from "./components/splashPage/SplashPage";


function App() {

	return (
		<div className="App">
			<MainNavbar />
			<div className="container">
				<Route exact path="/Login" render={(props) => <Login {...props} />} />
				<Route exact path="/SignUp" render={(props) => <SignUp {...props} />} />
				<Route exact path="/" component={SplashPage} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
			</div>
		</div>
	);
}
export default App;
