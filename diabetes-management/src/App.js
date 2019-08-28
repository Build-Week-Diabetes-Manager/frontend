import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormikUserLoginForm from './components/Login';
import FormikUserSignUpForm from './components/Signup';
import PrivateRoute from './components/PrivateRoute'
import {Navbar} from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.scss';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Link to="/login"> Login </Link>
      <Link to="/signup"> Sign Up </Link>  

      <div className="Container">
        {/* <Route exact path="/Login" component={FormikUserLoginForm} />
        <Route exact path="/Register" component={FormikUserSignUpForm} /> */}
        {/* Changed Route methods so we can have access to history prop*/}
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/login" render={props => <FormikUserLoginForm {...props} />}  />
        <Route exact path="/signup" render={props => <FormikUserSignUpForm {...props} />}  />
      </div>

      <Dashboard />

    </div>
    </Router>
  );
}
export default App;
