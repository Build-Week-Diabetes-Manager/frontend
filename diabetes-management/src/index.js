import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

// Redux Stuff

import thunk from "redux-thunk"; 
import { Provider } from "react-redux";
import { CreateStore, applyMiddleware } from "redux"; 
import { Reducer } from "../reducers/dataReducers"

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 

const store = CreateStore(Reducer, (applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}> 
<Router>
<App />
</Router>, 
</Provider>, 
document.getElementById('root'));

