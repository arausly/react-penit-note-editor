import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Link
} from 'react-router-dom';

import NoteTitle from './NoteTitle';
import NoteEditor from './NoteEditor';

export default class NotePanel extends Component{
	render(){
		return(
		    <div>
			   <div>
			      <NoteTitle />
			   </div>
			   <div>
			      <NoteEditor />
			   </div>
			   <Link to="/"><button>Save Note</button></Link>
		    </div>	
		);
	}
}