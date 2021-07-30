import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserUpdate from '../../views/UserUpdate';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route component={UserUpdate} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
