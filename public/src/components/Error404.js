import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Error404 extends Component{
	render(){
		return(
			<div>
				<h2>Page {this.props.location.url} Not Found</h2>
			</div>	
		);
	}
}