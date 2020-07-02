import {combineReducers} from 'redux';

import {dataReducer, userDataReducer} from './dataReducer';

export default combineReducers({
    dataReducer,
    // userDataReducer,
});