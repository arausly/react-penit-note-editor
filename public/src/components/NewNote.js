import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import NoteFooter from './NoteFooter';

export default class NewNote extends Component{
	constructor(props) {
		super(props);
		this.noteSubmit = this.noteSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			type:"",
		}  
	}

	noteSubmit(e) {
		e = e === undefined ? window.event : e;
		e.preventDefault();
		let title = this.title.value;
		let text = this.text.value;
		if (title.length !== 0 && text.length !== 0) {
			axios.post('/save', {
					title,
					text,
				})
				.then(res => alert("yea"))
				.catch(err => alert("nah"))
		}
	}
	
	handleChange(){
		this.setState({
			type:"typing"
		})
	}
	

	
	
	render(){
		const renderBtn = ()=>{
		  if(this.state.type ==="typing"){
			  return (
				  <button>Submit</button>
			  );
		  }
		}
		return(
			<div>
				<form onSubmit={this.noteSubmit}>
					<div>
						<input type="text" onChange={this.handleChange} placeholder="title" ref={e => this.title = e} autoFocus autoComplete="on"/>	
					</div>	
					<div>
						<textarea placeholder="Enter Note" onChange={this.handleChange} ref={e=> this.text = e} autoComplete="on"></textarea>
					</div>
					<div>
						{renderBtn()}
					</div>	
				</form>	
				<NoteFooter />
			</div>
		);
	}
}