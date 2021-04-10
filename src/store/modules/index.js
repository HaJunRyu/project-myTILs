import { combineReducers } from 'redux';
import auth from './auth';
import tils from './tils';

const rootReducer = combineReducers({ auth, tils });

export default rootReducer;
