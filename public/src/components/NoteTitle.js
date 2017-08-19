import React,{Component} from 'react';
import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';

 export class  NoteTitle extends Component{
	 constructor(props){
		 super(props);
		 this.passTitleVal = this.passTitleVal.bind(this);
		 this.state = {
			 title:"",
		 }
	 }
	 	componentWillMount() {
		if (!(this.props.id)) {
			throw new Error('Note id is undefined');
		}
		let titleId = this.props.displayNotes.filter(note => note.id === this.props.id);
		if (titleId.length === 0) {
			throw new Error('Match not found');
		} else {
			this.setState({
				title: titleId[0].title
			});
		}
	}
	 
	 passTitleVal(){
		  this.props.handleTitle(this.state.title);
	  }
	 
	 componentWillUpdate(nextProps,nextState){
		  this.passTitleVal();
	 }
	 
	 render(){
		 const {id,displayNotes} = this.props;
		 return(
	           <div>
			      <input placeholder="Note Title" value={this.state.title} ref={e =>this.title = e} 
					 onChange={()=>{ 
					  this.setState({title:this.title.value});
					}}
				  autoFocus/>
			   </div>
		 );
		}
}


NoteTitle.propTypes ={
	id:PropTypes.string.isRequired,
}

export default connect(state => state)(NoteTitle);



