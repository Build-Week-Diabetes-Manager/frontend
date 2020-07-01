import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_USER_DATA_START = "POST_USER_DATA_START";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";
export const POST_USER_DATA_FAILURE = "POST_USER_DATA_FAILURE";

const ENDPOINT = "https://diabetesmanager.herokuapp.com/api/manager/manage/";

export const getData = (state) => {
	return (dispatch) => {
		const toSend = [];
		const id = state.user_id;
		toSend.push(state);
		console.log("actionInvoked");

		dispatch({ type: FETCH_DATA_START });
		axiosWithAuth()
			.get(`${ENDPOINT}ds/${id}`, toSend)
			.then((res) => {
				console.log("resdata", res);
				dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
			})
			.catch((err) => dispatch({ type: FETCH_DATA_FAILURE, payload: err }));
	};
};

export const postUserBGL = (state) => {
	return (dispatch) => {
        console.log("Posting User BGL", console.log(state))
		dispatch({ type: POST_USER_DATA_START });
		axiosWithAuth()
			.post(`${ENDPOINT}`, state)
			.then((res) => {
				console.log("PostUserBGL resp");
				dispatch({type:POST_USER_DATA_SUCCESS})
			})
			.catch((err) => {
                console.log(err);
                dispatch({type:POST_USER_DATA_FAILURE})
			});
	};
};

// export const userIDAction = () => dispatch => {}
