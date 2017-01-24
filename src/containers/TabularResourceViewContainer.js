import React from "react";
import {connect} from "react-redux";
import HandsOnTable from "../components/handsontable";

export class TabularResourceViewContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			spec: []
		};
	}

	buildHandsontableSpec(data) {
		return {
			data: data.slice(1),
			colHeaders: data[0],
			readOnly: true,
			width: 1136,
			height: function () {
				if (data.length > 16) {
					return 432;
				}
			},
			colWidths: 47,
			rowWidth: 27,
			stretchH: 'all',
			columnSorting: true,
			search: true
		};
	}

	async componentWillReceiveProps(nextProps) {
		if (nextProps.datapackage) {
			if (nextProps.datapackage.resources.length == nextProps.resources.length) {
				let spec = await this.buildHandsontableSpec(nextProps.resources[0][0]);
				this.setState({
					spec: spec
				});
			}
		}
	}

	render() {
		return (
			<div>
				<HandsOnTable spec={this.state.spec}/>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		datapackage: state.dpr.datapackage,
		resources: state.dpr.resources
	};
};

export default connect(mapStateToProps)(TabularResourceViewContainer);
