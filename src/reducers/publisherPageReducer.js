import * as types from '../constants/actionTypes';

export default function publisherPageReducer(state={data:[]}, action) {
	switch (action.type) {
		case types.FETCH_PACKAGES_SUCCESS:
			return action.packages;
		default:
			return state;
	}
}
