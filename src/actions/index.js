import { axiosWithAuth } from "../utils/AxiosWithAuth";
// import axios from "axios";

//Additional actions not dispatched, but alternatively located in app: 
//sign-up, login, posting user input to DS;

//DS ACTION EXPORTS//
export const FETCH_STRAIN = 'FETCH_STRAIN';
export const FETCH_STATS = 'FETCH_STATS';

//STRAIN ACTION EXPORTS//

//Back-End
//save strains to backend
export const CREATE_SAVEDSTRAIN_START = 'CREATE_SAVEDSTRAIN_START';
export const CREATE_SAVEDSTRAIN_SUCCESS = 'CREATE_SAVEDSTRAIN_SUCCESS';
export const CREATE_SAVEDSTRAIN_FAILURE = 'CREATE_SAVEDSTRAIN_FAILURE';

//fetch savedstrains
export const FETCH_SAVEDSTRAIN_START = 'FETCH_SAVEDSTRAIN_START';
export const FETCH_SAVEDSTRAIN_SUCCESS = 'FETCH_SAVEDSTRAIN_SUCCESS';
export const FETCH_SAVEDSTRAIN_FAILURE = 'FETCH_SAVEDSTRAIN_FAILURE';

//delete saved strains from backend
export const DELETE_SAVEDSTRAIN_START = 'DELETE_SAVEDSTRAIN_START';
export const DELETE_SAVEDSTRAIN_SUCCESS = 'CREATE_SAVEDSTRAIN_SUCCESS';
export const DELETE_SAVEDSTRAIN_FAILURE = 'CREATE_SAVEDSTRAIN_FAILURE';

//USER ACTION EXPORTS//
//edit user
export const EDIT_USER = "EDIT_USER";
// export const TOGGLE_EDIT = "TOGGLE_EDIT"; ?
export const UPDATE_USERPROFILE_START = 'UPDATE_USERPROFILE_START';
export const UPDATE_USERPROFILE_SUCCESS = 'UPDATE_USERPROFILE_SUCCESS';
export const UPDATE_USERPROFILE_FAILURE = 'UPDATE_USERPROFILE_FAILURE';



//ACTIONS//

// RETURNS FROM DS//
//fetch strain recommendations from DS
export const fetchRecs = () => dispatch => {

}

//fetch user stats from DS
export const fetchStats = () => dispatch => {
    

}



//SAVED STRAINS-BACKEND//
//save strains to backend
export const saveStrain = (save, user) => dispatch => {
    dispatch({type: CREATE_SAVEDSTRAIN_START})
    axiosWithAuth()
    .post(` https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${user.id}`, save)
    .then( response => {
        console.log('response from POST_SAVED', response);
        dispatch({type: CREATE_SAVEDSTRAIN_SUCCESS, payload: response })
    })
    .catch(error => dispatch({type: CREATE_SAVEDSTRAIN_FAILURE, payload: error}))
}

//fetch savedstrains
export const fetchSavedStrains = (user) => dispatch => {
    dispatch({type:FETCH_SAVEDSTRAIN_START})
    axiosWithAuth()
    .get(`https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${user.id}`)
    .then( response => {
        console.log('response from GET_SAVED', response);
        dispatch({type: FETCH_SAVEDSTRAIN_SUCCESS, payload: response })
    })
    .catch(error => dispatch({type: FETCH_SAVEDSTRAIN_FAILURE, payload: error}))
}

//delete saved strains from backend
export const deleteSavedStrain = ({id, user, strain}) => dispatch => {
    dispatch({type: DELETE_SAVEDSTRAIN_START})
    axiosWithAuth()
    .delete(` https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${user.id}/${strain.id}`, id)
    .then(response => {
        console.log('response from DELETE_SAVED', response);
        dispatch({type: DELETE_SAVEDSTRAIN_SUCCESS, payload:response})
    })
    .catch(error => dispatch({type: DELETE_SAVEDSTRAIN_FAILURE, payload: error}))
}



//USER-BACKEND//
//edit user
export const editUser = ({ id, first_name, last_name, email, password }) => {
    return { type: EDIT_USER, id, first_name, last_name, email, password };
};

// export const toggleEdit = () => {
//     return { type: TOGGLE_EDIT };
// };

export const updateUserSubmit = ({id, changes}) => dispatch => {
    dispatch({type: UPDATE_USERPROFILE_START})
    axiosWithAuth()
    .put(` https://med-cabinet-server.herokuapp.com/api/user/${id}`, changes)
    .then( response => {
        console.log('response from UPDATE_USER', response);
        dispatch({type: UPDATE_USERPROFILE_SUCCESS, payload: response})
        // toggleEdit(false);
    })
    .catch(error => dispatch({type: UPDATE_USERPROFILE_FAILURE, payload: error}))
}
