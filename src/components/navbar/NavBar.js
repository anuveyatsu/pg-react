import React, {PropTypes} from "react";
import BrandLogo from "./brand-small-logo.png";
import Auth from "../auth/Auth";
import "./NavBar.css";

class NavBar extends React.Component {

    constructor(props, context) {
        super(props, context);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.props.authActions.doAuthentication();
    }

	handleLoginClick() {
		this.props.authActions.login();
	}

	handleLogoutClick() {
		this.props.authActions.logout();
	}

    render() {
		const { isAuthenticated, profile } = this.props.authState;

		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							<img alt="Brand" src={BrandLogo}/>
						</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<div className="col-sm-3 col-md-3">
							<form className="navbar-form" role="search">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search" name="q"/>
									<div className="input-group-btn">
										<button className="btn btn-default" type="submit">
											<i className="glyphicon glyphicon-search"/></button>
									</div>
								</div>
							</form>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<Auth isAuthenticated={isAuthenticated} profile={profile} onLoginClick={this.handleLoginClick} onLogoutClick={this.handleLogoutClick} />
						</ul>
					</div>
				</div>
			</nav>
		);
    }
}
NavBar.propTypes = {
    authState: PropTypes.object.isRequired,
	authActions: PropTypes.object.isRequired
};


export default NavBar;
