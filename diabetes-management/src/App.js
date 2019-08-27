import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import FormikUserLoginForm from './components/Login';
import FormikUserSignUpForm from './components/Signup';
import PrivateRoute from './components/PrivateRoute'
import {Navbar} from './components/Navbar';
import Dashboard from './components/Dashboard';



import './App.scss';
// import SignUp from "./components/SignUp.js"; 


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <div className="Container">
        {/* <Route exact path="/Login" component={FormikUserLoginForm} />
        <Route exact path="/Register" component={FormikUserSignUpForm} /> */}
        {/* Changed Route methods so we can have access to history prop*/}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" render={props => <FormikUserLoginForm {...props} />}  />
        <Route exact path="/register" render={props => <FormikUserSignUpForm {...props} />}  />
      </div>

      <Dashboard />

    </div>
    </Router>
  );
}
export default App;
