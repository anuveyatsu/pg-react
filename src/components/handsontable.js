import React, {PropTypes} from "react";
import Handsontable from "handsontable";

class HandsOnTable extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    new Handsontable(document.getElementById('htableone'), this.props.spec);
  }

  render() {
    return (
	<div className="panel panel-primary">
		<div className="panel-heading">Handson Table</div>
		<div id="htableone"></div>

	</div>
    );
  }

}
HandsOnTable.propTypes = {
	spec: PropTypes.object
};

export default HandsOnTable;
