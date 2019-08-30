import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/dataActions';

const initialState = {
    diadata: {
        "Pre-breakfast measurement": "",
        "Post-breakfast measurement": "",
        "Pre-lunch measurement": "",
        "Post-lunch measurement": "",
        "Pre-supper measurement": "",
        "Post-supper measurement": ""
    },
    isLoading: false;
    error: ""
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                diadata: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}