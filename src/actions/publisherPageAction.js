import * as actionTypes from '../constants/actionTypes';
import PublisherPageApi from "../api/publisherPageApi";

export function getAllPackageForPublisherSuccess(packages) {
	debugger;
	return {type: actionTypes.FETCH_PACKAGES_SUCCESS, packages};
}

export function getAllPackageForPublisher(publisherName) {
	return dispatch => {
		return PublisherPageApi.getAllPackages(publisherName)
			.then(result => dispatch(getAllPackageForPublisherSuccess(result.data)));
	};
}
