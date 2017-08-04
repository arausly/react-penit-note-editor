import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
	Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import NoteTitle from './NoteTitle';
import NoteEditor from './NoteEditor';
import {
	connect
} from 'react-redux';

export class NotePanel extends Component{
	constructor(props){
		super(props);
		this.handleTitle = this.handleTitle.bind(this);
		this.handleText = this.handleText.bind(this);
		this.state ={
			text:"",
			title:"",
			id:this.props.match.params.id,
			typing:''
		}
	}
	componentWillMount(){
	  this.handleTitle();
	  this.handleText();
	}
	
	handleTitle(title){
		this.setState({title})
	}

	handleText(text){
		this.setState({text})
	}
	
	componentWillUpdate(nextProps,nextState){
		if(this.state.title !== nextState.title || this.state.text !== nextState.text){
			this.setState({typing:"typing"});
		}
	}

	render(){
		const {id,title,text} = this.state
		const renderBtn = () =>{
			if(this.state.typing === "typing"){
				return(
				   <button 
					onClick={(e)=>{
						if(title.length !==0 && text.length !== 0){
							e = e === undefined ? window.event : e;
						  e.preventDefault();
							
						 axios.post('/save', {
							title: this.state.title,
								text: this.state.text,
								id
							}).then(res => {
								alert('Yea');
							}).catch(err => {
								alert('Nah');
							})
						}else{
							console.error('title an text values equal null');
						}
					}}>Save Note</button>	
				);
			}
		}
		return(
			<div>
				<div>
					<NoteTitle id={id} handleTitle={this.handleTitle}/>
				</div>
				<div>
					<NoteEditor id={id} handleText={this.handleText}/>
				</div>
				{renderBtn()}
			</div>	
		);
	}
}

NotePanel.propTypes ={
	match:PropTypes.object.isRequired,
}

export default connect(state =>state)(NotePanel)