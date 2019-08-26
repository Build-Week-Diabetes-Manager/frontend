import React from 'react';
import FormikUserForm from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={FormikUserForm} />
    </div>
    </Router>
  );
}

export default App;
