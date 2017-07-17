import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route,
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

store.dispatch(startDisplayNotes());

ReactDOM.render( 
	<Router>
		<Provider store={store}>
			<NoteApp>
				<Route exact={true} path="/" component={NoteSplash}/>
				<Route path="/Notes" component ={NotePanel} />	
			</NoteApp>	
		</Provider>
	</Router>, 
document.getElementById('main')
);
