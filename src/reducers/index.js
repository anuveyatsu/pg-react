import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from "./authReducer";

const rootReducer = combineReducers({
	routing: routerReducer,
	auth: auth,
});

export default rootReducer;
