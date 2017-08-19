import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
	NavLink
} from 'react-router-dom';

export default class Login extends Component{
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
			return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="name" ref="name" />
					<input type="password" placeholder="password" ref="password"/>
					<NavLink to="/home"><button onClick ={()=>{
								axios.post('/login',{
									name:this.refs.name.value,
									password:this.refs.password.value
								}).then(res =>{
									if(!res){
										return Promise.reject();
									}
									window.location.href ="/home";
								}).catch(err => console.error('Network Error'))
							}}>Submit</button></NavLink>
				</form>	  
			</div>		
		);
	}
}