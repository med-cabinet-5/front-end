import {
    TOGGLE_FAV
} from '../actions';

const INIT_STATE = {
    favorites: [],
};

export default function reducer(state = INIT_STATE, action) {
        switch (action.type) {
        case TOGGLE_FAV:
        const newStrain = action.payload

        if (state.favorites.length === 0) {
            return {
                ...state,
                favorites: [newStrain],
            };
        } else {
            const favoriteCheck = state.strains.filter((strain) => strain.name === newStrain.name);

            if (favoriteCheck.length > 0) {
                return {
                    ...state,
                    favorites: state.favorites.filter(strain => strain.name !== action.payload.name)
                    }; 
                }
                else {
                return {
                    ...state, 
                    favorites: [...state.favorites, newStrain]
                };
                }
        }

        default:
            return state;
    }
}