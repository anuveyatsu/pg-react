import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import AboutPage from "./components/aboutPage/AboutPage";
import HomePage from "./components/homePage/HomePage";
import App from "./containers/app/App";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="about" component={AboutPage}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);
