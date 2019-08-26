import React from 'react';
import './App.css';
import SignUp from "./components/SignUp.js"; 
import { Route } from "react-router-dom"; 
import FormikUserForm from './components/SignUp.js';


function App() {
  return (
    <div className="App">
    <SignUp /> 
     <Route path="/SignUp" component={FormikUserForm} />
    </div>
  );
}

export default App;
