import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<Route path="*" component={AppContainer} />
		</Route>
	</Router>
	),document.getElementById('main'))