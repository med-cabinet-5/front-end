import AxiosWithAuth from '../utils/AxiosWithAuth';

export const TOGGLE_FAV = "TOGGLE_FAV";
export const FETCH_START  = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_START });
    AxiosWithAuth()
        .get('https://med-cabinet-server.herokuapp.com/api/user/')
        .then(res => { 
            console.log(res.data)
            dispatch ({ type: FETCH_SUCCESS, payload: res.data })

        })
        .catch(err => dispatch({ type: FETCH_FAIL, payload: err }))
};

export const getStrains = () => dispatch => {
    dispatch({ type: FETCH_START });
    AxiosWithAuth()
        .get()
        .then(res => {
            console.log(res.data)
            dispatch ({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_FAIL,payload: err }))
};

export const getStats = () => dispatch => {
    dispatch({ type: FETCH_START });
    AxiosWithAuth()
        .get()
        .then(res => {
            console.log(res.data)
            dispatch ({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_FAIL,payload: err }))
};

export const toggleFav = (strain) => {
    return {
        type: 'TOGGLE_FAV',
        payload: strain
    }
};
