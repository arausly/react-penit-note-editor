import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import NoteHeader from './NoteHeader';
import NoteFooter from './NoteFooter';
import NoteSplash from './NoteSplash';


export default class Home extends Component{
	render(){
		return(
		   <div>
			  <NoteHeader />
			  <NoteSplash />
			  <NoteFooter />	
		   </div>	
		);
	}
}
