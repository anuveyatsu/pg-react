import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as authActions from '../../actions/authAction';
import NavBar from "../../components/navbar/NavBar";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

    }

    render() {
		return (
			<div>
				<NavBar {...this.props} />
				{this.props.children}

			</div>
		);
    }
}
App.propTypes = {
	children: PropTypes.element
};

function mapStateToProps(state) {
	return {
		authState: state.auth
	};
}

function mapDispatchToProps(dispatch) {
	return {
		authActions: bindActionCreators(authActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
