import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/logInSignUp/Login";
import SignUp from "./components/logInSignUp/Signup";
import MainNavbar from "./components/navBar/Navbar";
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
