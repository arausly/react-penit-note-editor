import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom';
import {
	displayNotes,
	startDisplayNotes
} from './actions/actions';
import {
	Provider
} from 'react-redux';
const store = require('./store/configStore').config();

import NoteApp from './components/NoteApp';
import NoteSplash from './components/NoteSplash';
import NotePanel from './components/NotePanel';
import Error404 from './components/Error404';
import NewNote from './components/NewNote';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home';


store.dispatch(startDisplayNotes());

// what should be the link of my sign in button
// what should be on my noteapp component.

ReactDOM.render( 
	<Router>
		<Provider store={store}>
			<NoteApp>
					<Switch>
						<Route exact={true} path="/" component={SignIn} />
						<Route path="/login" component={Login} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/home/newNote" component={NewNote} />
						<Route exact path="/home/Notes/:id/edit" component={NotePanel} />
						<Route component = {Error404} />
						
					</Switch>
			</NoteApp>	
		</Provider>
	</Router>, 
	document.getElementById('main')
);
