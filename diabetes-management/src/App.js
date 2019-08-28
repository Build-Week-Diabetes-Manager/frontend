import React from 'react';
import PrivateRoute from './components/PrivateRoute'
// import { NavBar} from './components/Navbar'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login.js"; 
// import setUsers from "./components/Login.js"; 
import './App.css';
import FormikUserFormLogin from './components/Login'
import FormikUserFormSignup from './components/Signup.js'
// import Signup from "./components/Signup.js"; 


function App() {
  return (
    <Router> 

<div className="App">
     <Link to="/Dashboard"> Sign Up </Link> 
    <Link to="/login"> Login </Link>
    </div> 
    <div className="container"> 
    <Route path="/Login" render={props => <FormikUserFormLogin {...props } />} />
    <Route path="/Register" render={props => <FormikUserFormSignup {...props } />} />
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    </div>
    </Router>
    
      
    
  
   
    
    
  );
}
export default App;
