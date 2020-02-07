import FETCH_STRAIN_START from "../actions";
import FETCH_STRAIN_SUCCESS from "../actions";
import FETCH_STRAIN_FAILURE from "../actions";

import FETCH_STATS_START from "../actions";
import FETCH_STATS_SUCCESS from "../actions";
import FETCH_STATS_FAILURE from "../actions";

import CREATE_SAVEDSTRAIN_START from "../actions";
import CREATE_SAVEDSTRAIN_SUCCESS from "../actions";
import CREATE_SAVEDSTRAIN_FAILURE from "../actions";

import FETCH_SAVEDSTRAIN_START from "../actions";
import FETCH_SAVEDSTRAIN_SUCCESS from "../actions";
import FETCH_SAVEDSTRAIN_FAILURE from "../actions";

import DELETE_SAVEDSTRAIN_START from "../actions";
import DELETE_SAVEDSTRAIN_SUCCESS from "../actions";
import DELETE_SAVEDSTRAIN_FAILURE from "../actions";


export const initialState =  {  
    strains: [],
    isFetching: false,
    error: '',
    }


export const indexReducer = (state, action) => {
    switch(action.type) {
        //fetch strains from DS
        case FETCH_STRAIN_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case FETCH_STRAIN_SUCCESS:
            return {
                ...state,
                strains: [...state],
                error: null
            }
        case FETCH_STRAIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                strains: []
            }

        //fetch stats from DS
        case FETCH_STATS_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case FETCH_STATS_SUCCESS:
            return {
                ...state,
                strains: [...state],
                error: null
            }
        case FETCH_STATS_FAILURE:
            return {
                ...state,
                error: action.payload,
                strains: []
            }
        
        //save strains to saved strains
        case CREATE_SAVEDSTRAIN_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case CREATE_SAVEDSTRAIN_SUCCESS:
            return {
                ...state,
                strains: [...state],
                error: null
            }
        case CREATE_SAVEDSTRAIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                strains: []
            }

        //display saved strains
        case FETCH_SAVEDSTRAIN_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case FETCH_SAVEDSTRAIN_SUCCESS:
            return {
                ...state,
                strains: [...state],
                error: null
            }
        case FETCH_SAVEDSTRAIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                strains: []
            }

        //delete saved strains
        case DELETE_SAVEDSTRAIN_START:
            return {
                ...state,
                isFetching: true,
                error: null 
            }
        case DELETE_SAVEDSTRAIN_SUCCESS:
            return {
                ...state,
                strains: [...state],
                error: null
            }
        case DELETE_SAVEDSTRAIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                strains: []
            }

        default: 
        return state;
    };
}