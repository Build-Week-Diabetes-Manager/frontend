import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const POST_USER_DATA_START = 'POST_USER_DATA_START';
export const POST_USER_DATA_SUCCESS ='POST_USER_DATA_SUCCESS';
export const POST_USER_DATA_FAILURE = 'POST_USER_DATA_FAILURE'; 

export const getData = (state,id) => {
    return dispatch => {
        const toSend = [];
        toSend.push(state);
        console.log('actionInvoked');
        console.log('tosend', toSend);
        dispatch({ type: FETCH_DATA_START });
        axiosWithAuth()
            .post(`https://diabetesmanager.herokuapp.com/api/manager/manage/ds/${id}`, toSend)
            .then(res => {
                console.log('resdata', res);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data} )
            })
            .catch(err => dispatch({ type: FETCH_DATA_FAILURE, payload: err} ))
    }
}


export const postUserData = () => {

}

// export const userIDAction = () => dispatch => {}