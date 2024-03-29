import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_USER_DATA_START = "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";
export const POST_USER_DATA_FAILURE = "POST_USER_DATA_FAILURE";

export const FETCH_USER_DATA_START = "FETCH_USER_DATA_START";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_FAILURE = "FETCH_USER_DATA_SUCCESS";

const ENDPOINT = "https://diabetesmanager.herokuapp.com/api/manager/";
const id = localStorage.user_id;

export const getData = (state) => {
	return (dispatch) => {
		const toSend = [];
		toSend.push(state);

		dispatch({ type: FETCH_DATA_START });
		axiosWithAuth()
			.get(`${ENDPOINT}ds/${id}`, toSend)
			.then((res) => {
				dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
			})
			.catch((err) => dispatch({ type: FETCH_DATA_FAILURE, payload: err }));
	};
};

export const getUserBGL = (state) => {
	const userBGLArray = [];

	return (dispatch) => {
		dispatch({ type: FETCH_USER_DATA_START });
		axiosWithAuth()
			.get(`${ENDPOINT}/${id}`)
			.then((res) => {
				res.data.forEach(el => {
					userBGLArray.push(el.value)
				});
				// console.log(userBGLArray);

				dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: userBGLArray });
			})
			.catch((err) => {
				dispatch({ type: FETCH_USER_DATA_FAILURE, payload: err });
			});
	};
};

export const postUserBGL = (state) => {
	// console.log("Posting User BGL", state);
	return (dispatch) => {
		dispatch({ type: POST_USER_DATA_START });
		axiosWithAuth()
			.post(`${ENDPOINT}`, state)
			.then((res) => {
				// console.log("PostUserBGL resp");
				dispatch({ type: POST_USER_DATA_SUCCESS });
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: POST_USER_DATA_FAILURE });
			});
	};
};

// export const userIDAction = () => dispatch => {}
