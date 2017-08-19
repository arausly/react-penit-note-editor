import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
	connect 
} from 'react-redux';

import SignIn from './SignIn';

export default class NoteApp extends Component{
	render(){	
		return(
			<div>
		      {this.props.children}
			</div>
		);
	}
}

