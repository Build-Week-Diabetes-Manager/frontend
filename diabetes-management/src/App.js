import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';


import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import FormikUserFormLogin from './components/Login'
import FormikUserFormSignup from './components/Signup.js'
import Login from "./components/Login.js"; 




function App() {
  return (
    <Router> 

<div className="App">
   
    </div> 
    <div className="container"> 
    <Route path="/Login" render={props => <FormikUserFormLogin {...props } />} />
    <Route path="/Signup" render={props => <FormikUserFormSignup {...props } />} />
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    </div>
   
    </Router>
  );
}
export default App;
