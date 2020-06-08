import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';


import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import FormikUserFormLogin from './components/Login'
import FormikUserFormSignup from './components/Signup.js'
import Login from "./components/Login.js"; 
import Navbar from './components/Navbar'
import { SplashPage } from './components/splashPage/SplashPage';



function App() {

  const [username, setUserName] = useState()

  return (
      <div className="App">
        <Navbar/>
        <div className="container"> 
          <Route exact path="/Login" render={props => <FormikUserFormLogin {...props } />} />
          <Route exact path="/SignUp" render={props => <FormikUserFormSignup {...props } />} />
          <Route exact path="/" component={SplashPage} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        </div>
      </div> 
   
  );
}
export default App;
