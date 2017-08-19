import React,{Component} from 'react';
import {
	Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
	connect
} from 'react-redux';

import NoteTitle from './NoteTitle';
import NoteEditor from './NoteEditor';
import NoteFooter from './NoteFooter';


export class NotePanel extends Component{
	constructor(props){
		super(props);
		this.handleTitle = this.handleTitle.bind(this);
		this.handleText = this.handleText.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
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
	
	componentWillUnmount(){
		if(this.state.typing === "typing"){
			alert('leaving without saving');
		}	
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
	
    handleDelete(e){
	   	e = e === undefined ? window.event : e;
		e.preventDefault();
		let {id} = this.state;
		axios.delete(`/delete/${id}`)
		     .then(res =>alert('yea'))
		     .catch(err => alert('nah'));
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
					<button onClick={this.handleDelete}>Delete</button>
				</div>	
				<div>
					<NoteTitle id={id} handleTitle={this.handleTitle}/>
				</div>
				<div>
					<NoteEditor id={id} handleText={this.handleText}/>
				</div>
				{renderBtn()}
				<NoteFooter />
			</div>	
		);
	}
}

NotePanel.propTypes ={
	match:PropTypes.object.isRequired,
}

export default connect(state =>state)(NotePanel)