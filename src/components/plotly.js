import React from "react";
import Plotly from "plotly.js/lib/core";

class PlotlyChart extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		Plotly.newPlot("vis", this.props.data, this.props.layout);
	}

	render() {
		return (
		<div className="panel panel-primary">
			<div className="panel-heading">Plotly Charts</div>
			<div id="vis"></div>

		</div>
		)
	}

}

export default PlotlyChart
