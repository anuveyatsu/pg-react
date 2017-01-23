import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from "./authReducer";
import publisherPage from "./publisherPageReducer";
import datapackage from "./datapackageReducer";

const rootReducer = combineReducers({
	routing: routerReducer,
	auth: auth,
	publisherPage: publisherPage,
	dpr: datapackage
});

export default rootReducer;
