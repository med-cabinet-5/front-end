import { combineReducers} from 'redux';
import users from './users';
import favorites from './favorites';

const rootReducer = combineReducers([
    favorites,
    users
])

export default rootReducer;