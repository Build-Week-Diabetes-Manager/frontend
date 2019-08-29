import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';


import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import FormikUserFormLogin from './components/Login'
import FormikUserFormSignup from './components/Signup.js'
import Login from "./components/Login.js"; 
import Navbar from './components/Navbar'



function App() {
  return (


<div className="App">
<Navbar/>
    <div className="container"> 

    <Route exact path="/Login" render={props => <FormikUserFormLogin {...props } />} />
    <Route exact path="/" render={props => <FormikUserFormSignup {...props } />} />
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    </div>
      
    </div> 
   
  );
}
export default App;
