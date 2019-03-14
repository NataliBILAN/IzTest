import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Edit from './components/Edit';
import Main from './components/Main';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/edit/:id" component={Edit} />
		</Switch>
	</Router>
);

export default App;
