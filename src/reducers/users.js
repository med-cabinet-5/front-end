import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
} from '../actions';

const INIT_STATE = {
    users: [],
    isFetching: false,
};

const asyncReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetching: false, 
            };
    
        case FETCH_FAIL:
            return { ...state,
                error: action.payload
            };       

        default:
            return state;
    }
};

export default asyncReducer;