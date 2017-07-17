import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'node-uuid';
import moment from 'moment';
import {
	connect
} from 'react-redux';

import NotePane from './NotePane';
class NoteSplash extends Component{

	render(){
		const {displayNotes} = this.props;
			return(
				<div>
					<div>
						<p>Notes</p>
					</div>
				    <NotePane />
				</div>	
			);
	}
}

NoteSplash.propTypes ={
displayNotes:PropTypes.array.isRequired
}


export default connect(state => state)(NoteSplash);
