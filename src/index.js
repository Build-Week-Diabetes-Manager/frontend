// React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux  + MiddleWare Stuff
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk"; 
import { logger } from 'redux-logger';

// Styling
import './index.scss';
// Components
import App from './App';
import { dataReducer } from "./reducers/dataReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ADD LOGGER TO END OF MIDDLEWARE AFTER INSTALLING redux-logger
const store = createStore(dataReducer, composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
<Provider store={store}> 
<Router>
<App />
</Router>
</Provider>,
document.getElementById('root'));

