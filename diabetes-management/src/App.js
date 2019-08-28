import React from 'react';
<<<<<<< HEAD
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login.js"; 
import './App.css';
import FormikUserFormLogin from './components/Login'
import FormikUserFormSignup from './components/Signup.js'
// import Signup from "./components/Signup.js"; 
=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormikUserLoginForm from './components/Login';
import FormikUserSignUpForm from './components/Signup';
import PrivateRoute from './components/PrivateRoute'
import {Navbar} from './components/Navbar';
import Dashboard from './components/Dashboard';


// Test Semantic UI tabs
// import DashboardPointing from './components/DashboardTest';




import './App.scss';




function App() {
  return (
<<<<<<< HEAD
    <Router> 

<div className="App">
     <Link to="/signup"> Sign Up </Link> 
    <Link to="/login"> Login </Link>
    </div> 
    <div className="container"> 
    <Route path="/Login" render={props => <FormikUserFormLogin {...props } />} />
    <Route path="/Signup" render={props => <FormikUserFormSignup {...props } />} />
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    </div>
    <Dashboard />
      {/* <DashboardPointing /> */}
    </Router>
  );
}
export default App;
