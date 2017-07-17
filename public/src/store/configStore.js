import * as redux from 'redux';
import reduxThunk from 'redux-thunk';

import {
	displayNotes
} from '../reducers/reducers';


const config = () =>{
	
	//combines multiple reducers for specific actions
	const reducer = redux.combineReducers({
		displayNotes,
	});

	// window.devToolsExtensions is to enable the redux developer plugin for this app in the browser
	//should probably remove in prod.

	const store = redux.createStore(reducer,redux.compose(
		redux.applyMiddleware(reduxThunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	
	return store;
}

module.exports = {
	config,
}