import React,{Component} from 'react';
import ReactDOM from "react-dom";
import {
	NavLink
} from 'react-router-dom';


class NoteHeader extends Component{
	render(){
		return (
			<div>
				<button>Search</button>
				<h1>PENit</h1>	
				<NavLink to="/newNote"><button>New Note</button></NavLink>
			</div>
		);
	}
}

export default NoteHeader;