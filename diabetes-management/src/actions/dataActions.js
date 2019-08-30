import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = (state) => {
    return dispatch => {
        const toSend = [...state];
        console.log('actionInvoked');
        dispatch({ type: FETCH_DATA_START });
        axiosWithAuth()
            .post(`https://diabetesmanager.herokuapp.com/api/manager/manage/ds`, toSend)
            .then(res => {
                console.log('resdata', res);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data} )
            })
            .catch(err => dispatch({ type: FETCH_DATA_FAILURE, payload: err} ))
    }
}