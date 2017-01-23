import React, { Component, PropTypes } from 'react';
import "./Auth.css";

export default class Auth extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props;
		return (
			<ul>
				{ !isAuthenticated ? (
						<ul className="list-inline">
							<li><button className="btn btn-primary" onClick={onLoginClick}>Login</button></li>
						</ul>
					) : (
						<ul className="list-inline">
							<li><img className="avatar" src={profile.picture} /></li>
							<li><button className="btn btn-primary" onClick={onLogoutClick}>Logout</button></li>
						</ul>
					)}
			</ul>
		);
	}
}

Auth.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	onLogoutClick: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	profile: PropTypes.object,
};
