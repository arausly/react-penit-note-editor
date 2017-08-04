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

store.dispatch(startDisplayNotes());

ReactDOM.render( 
	<Router>
		<Provider store={store}>
			<NoteApp>
	           <Switch>
					<Route exact={true} path="/" component={NoteSplash}/>
	                <Route path="/newNote" component={NewNote} />
					<Route path="/Notes/:id/edit" component={NotePanel} />
					<Route component = {Error404} />
	           </Switch>
			</NoteApp>	
		</Provider>
	</Router>, 
document.getElementById('main')
);
