import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as publisherPageActions from "../../actions/publisherPageAction";

class PublisherPage extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.packageRow = this.packageRow.bind(this);
	}

	componentDidMount(){
		this.props.publisherPageActions.
		getAllPackageForPublisher(this.props.publisherName);
	}

	packageRow(p, index) {
		let href = "/"+this.props.publisherName+"/"+p[0];
		return <a key={index} className="list-group-item" href={href} >{p[0]}</a>;
	}

	render() {
		return (
			<div className="panel-group">
				{this.props.publisherPageState.data.map(this.packageRow)}
			</div>
		);
	}
}

PublisherPage.propTypes = {
	publisherName: PropTypes.string.isRequired,
	publisherPageState: PropTypes.object.isRequired,
	publisherPageActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	const publisherName = ownProps.params.pub;
	return {
		publisherPageState: state.publisherPage,
		publisherName
	};
}

function mapDispatchToProps(dispatch) {
	return {
		publisherPageActions: bindActionCreators(publisherPageActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PublisherPage);
