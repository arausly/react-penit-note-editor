import React,{Component} from 'react';
import ReactDOM from "react-dom";


class NoteHeader extends Component{
	render(){
		return (
			<div>
			<button>Search</button>
			<h1>PENit</h1>	
			<button>New Note</button>
			</div>
		);
	}
}

export default NoteHeader;