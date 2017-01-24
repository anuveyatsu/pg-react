import React from "react";
import PlotlyChart from "../components/plotly";
import HandsOnTable from "../components/handsontable";
//connect redux:
import {connect} from "react-redux";
import * as actions from "../actions/datapackageActions";

class DataPackageViewContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			layout: []
		};
	}

	componentDidMount() {
		let pub = this.props.publisherName;
		let pac = this.props.packageName;
		let jsonUrl = "https://bits.staging.datapackaged.com/metadata/"+pub+"/"+pac+"/_v/latest/datapackage.json";
		//metadata/core/airport-codes/_v/latest
		this.props.dispatch(actions.getDataPackage(jsonUrl));
	}

	generateSpec(view) {
		return ({
			"layout": {
				"xaxis": {
					"title": view.state.group
				}
			}
		});
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

	convertData(data, dp) {
		let dataset = []
		let group = dp.views[0].state.group
		let series = dp.views[0].state.series
		let xIndex
		let yIndex = []
		data[0].forEach((header, index) => {
			if(header == group) {xIndex = index}
			series.forEach(serie => {
				if(header == serie) {yIndex.push(index)}
			})
		})
		for (let i = 0; i < series.length; i++) {
			dataset.push({x: [], y: [], mode: "lines", name: series[i]})
			dataset[i].x = data.slice(1).map(row => row[xIndex])
			dataset[i].y = data.slice(1).map(row => row[yIndex[i]])
		}
		return dataset
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.datapackage.resources) {
			//check if resources are received by comparing descriptor's resources and
			//received data length
			if (nextProps.resources.length > 0){
				if(nextProps.datapackage.resources.length == nextProps.resources.length) {
					if(nextProps.datapackage.views) {
						let data =  this.convertData(
							nextProps.resources[0],
							nextProps.datapackage
						);
						let layout = this.generateSpec(nextProps.datapackage.views[0]);
						this.setState({
							data: data,
							layout: layout
						});

					}
				}
			}
		}
		if (nextProps.datapackage) {
			if (nextProps.datapackage.resources.length == nextProps.resources.length) {
				let spec = this.buildHandsontableSpec(nextProps.resources[0]);
				this.setState({
					spec: spec
				});
			}
		}
	}

	render() {
		return (
			<div className="panel-group">
				<PlotlyChart data={this.state.data} layout={this.state.layout}/>
				<HandsOnTable spec={this.state.spec}/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// const {datapackage, resources} = state;
	debugger;
	return {
		datapackage: state.dpr.datapackage,
		resources: state.dpr.resources,
		publisherName: ownProps.params.pub,
		packageName: ownProps.params.package,
	};
};

export default connect(mapStateToProps)(DataPackageViewContainer);
