import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	FETCH_USER_DATA_START,
	FETCH_USER_DATA_FAILURE,
	FETCH_USER_DATA_SUCCESS,
} from "../actions/dataActions";

const initialState = {
	diadata: {
		"Pre-breakfast measurement": "",
		"Post-breakfast measurement": "",
		"Pre-lunch measurement": "",
		"Post-lunch measurement": "",
		"Pre-supper measurement": "",
		"Post-supper measurement": "",
	},
	userBGLData: [],
	isLoading: false,
	error: "",
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: "",
				diadata: action.payload,
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FETCH_USER_DATA_START:
			console.log("start Fetch reducers");

			return {
				...state,
				isLoading: true,
			};
		case FETCH_USER_DATA_SUCCESS:
			console.log("ping: ", action.payload);
			return {
				...state,
				isLoading: false,
				error: "",
				userBGLData: action.payload,
			};
		case FETCH_USER_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// export const userDataReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case FETCH_USER_DATA_START:
// 			console.log("start Fetch reducers");

// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		case FETCH_USER_DATA_SUCCESS:
// 			console.log("ping: ", action.payload);
// 			return {
// 				...state,
// 				isLoading: false,
// 				error: "",
// 				userBGLData: action.payload,
// 			};
// 		case FETCH_USER_DATA_FAILURE:
// 			return {
// 				...state,
// 				isLoading: false,
// 				error: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };
