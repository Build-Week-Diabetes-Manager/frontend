import React from 'react';

import FormikUserForm from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import {Navbar} from './components/Navbar'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route } from "react-router-dom";



import './App.css';
import UserForm from "./components/SignUp.js"; 

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
    <Route exact path="/Login" component={FormikUserForm} />
    <Route exact path="/Register" component={UserForm} />
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    </div>
    </div>
    </Router>
  );
}
export default App;
