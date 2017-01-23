import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import HomePage from "./components/homePage/HomePage";
import PublisherPage from "./containers/publisherPage/PublisherPage";
import DataPackageViewContainer from "./containers/DataPackageViewContainer";
import App from "./containers/app/App";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path=":pub" component={PublisherPage}/>
		<Route path=":pub/:package" component={DataPackageViewContainer}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);
