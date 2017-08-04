import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class NewNote extends Component{
	render(){
		return(
		   <div>
				<div>
			  		<input type="text" placeholder="title"/>	
				</div>	
				<div>
					<textarea placeholder="Enter Note"></textarea>
				</div>	
		   </div>
		);
	}
}