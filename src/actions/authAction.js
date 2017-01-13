import * as ActionTypes from "../constants/actionTypes";
import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock('wVlWQxfjVxN1IfevFmb2sznfcEmRWpMu', 'atomatichq.eu.auth0.com');

function loginSuccess(profile) {
	return {
		type: ActionTypes.LOGIN_SUCCESS,
		profile
	};
}

function loginError(error) {
	return {
		type: ActionTypes.LOGIN_ERROR,
		error
	};
}

/* eslint-disable */
export function login() {
	// display the lock widget
	return dispatch => {
		lock.show();
	};
}

function logoutSuccess() {
	return {
		type: ActionTypes.LOGOUT_SUCCESS
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		return dispatch(logoutSuccess());
	};
}

// Listen to authenticated event and get the profile of the user
export function doAuthentication() {
	return dispatch => {
		lock.on("authenticated", function(authResult) {
			lock.getProfile(authResult.idToken, function(error, profile) {

				if (error) {
					// handle error
					return dispatch(loginError(error));
				}

				localStorage.setItem('profile', JSON.stringify(profile));
				localStorage.setItem('id_token', authResult.idToken);
				return dispatch(loginSuccess(profile));
			});
		});
	};
}
