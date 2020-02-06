import UPDATE_USERPROFILE_START from "../actions";
import UPDATE_USERPROFILE_SUCCESS from "../actions";
import UPDATE_USERPROFILE_FAILURE from "../actions";


export const initialState =  {  
    user: [],
    isFetching: false,
    error: '',
}

export const userReducer = (state, action) => {
    switch(action.type) {
    case UPDATE_USERPROFILE_START:
        return {
            ...state,
            isFetching: true,
            error: null 
        }
    case UPDATE_USERPROFILE_SUCCESS:
        return {
            ...state,
            user: [...state],
            error: null
        }
    case UPDATE_USERPROFILE_FAILURE:
        return {
            ...state,
            error: action.payload,
            user: []
        }

    default: 
    return state;
};
}