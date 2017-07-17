import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
	 connect 
} from 'react-redux';

import NoteFooter from './NoteFooter';
import NoteHeader from './NoteHeader';
import NoteSplash from './NoteSplash';

export default class NoteApp extends Component{
	constructor(props){
		super(props);
		this.state ={
			notes:"some note"
		}
	}
	render(){	
//		 const children = React.Children.map(this.props.children,(child) =>{
//			return React.cloneElement(child,{
//					notes:this.state.notes,
//				    name:"something",
//				});
//		 });
		return(
			<div>
			<NoteHeader/>
		      {this.props.children}
			<NoteFooter/>
			</div>
		);
	}
}

