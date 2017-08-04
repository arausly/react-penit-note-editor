import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
	connect
} from 'react-redux';
import {
	NavLink
} from 'react-router-dom';

export class NotePane extends Component{
	render(){
	 const {displayNotes}  = this.props;
		return(
		<div>

			{
				displayNotes.map((notes,index)=>{
					return (
						<NavLink key={index} to={`/Notes/${encodeURIComponent(notes.id)}/edit`}>
			                  <ul>
								<li>{notes.title}</li>
								<li>{notes.text}</li>
								<li>{moment(notes.date).format('YYYY MMM Do h:mm a')}</li>
							</ul>
						</NavLink>
					);
				})
			}
		</div>	
		);
	}
}


NotePane.propTypes ={
  displayNotes:PropTypes.array.isRequired
}

export default connect(state =>state )(NotePane);