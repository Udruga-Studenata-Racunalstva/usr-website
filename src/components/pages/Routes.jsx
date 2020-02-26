import React from 'react';
import { Route, Switch } from 'react-router-dom'

import WelcomeScreen from './WelcomeScreen'
import Home from './Home'
import Events from './Events'
import Projects from './Projects'
import News from './News'
import Page404 from './Page404'

function Routes () {
	return (
		<Switch>
			<Route exact path="/" component={WelcomeScreen} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/news" component={News} />
			<Route component={Page404} />
		</Switch>
	);
}

export default Routes;
