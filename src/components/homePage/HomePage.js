import React from 'react';
import {Link} from 'react-router';
import PublisherListPanel from "../publisherListPanel/PublisherListPanel";

class HomePage extends React.Component {

	constructor(props, context){
		super(props, context);
	}

	render(){
		return(
			<div >
				<h1>Welcome to Data Package Registry</h1>

				<PublisherListPanel />
			</div>
		);
	}
}
export default HomePage;

