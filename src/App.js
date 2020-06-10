import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';


import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import SignUp from './components/Signup.js'
import MainNavbar from './components/Navbar'
import { SplashPage } from './components/splashPage/SplashPage';



function App() {

  const [username, setUserName] = useState()

  return (
      <div className="App">
        <MainNavbar/>
        <div className="container"> 
          <Route path="/Login" render={props => <Login {...props } />} />
          <Route path="/SignUp" render={props => <SignUp {...props } />} />
          <Route exact path="/" component={SplashPage} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        </div>
      </div> 
   
  );
}
export default App;
