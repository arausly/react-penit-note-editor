import React, {
	Component
} from 'react';
import axios from 'axios';
import {
	NavLink
} from 'react-router-dom';

export default class SignIn extends Component{
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderMsg = this.renderMsg.bind(this);
		this.state = {
			err:false,
		}
	}

	handleSubmit(e) {
		e = e === undefined ? window.event : e;
		e.preventDefault();
		let name = this.refs.name.value,
			initial = this.refs.initial.value,
			password = this.refs.password.value;
		if (name.length !== 0 && password.length !== 0 && initial.length !== 0) {
			if (initial !== password) {
				this.setState({err:true});
				this.refs.initial.value = "",
					this.refs.password.value = ""
				this.refs.initial.focus();
			} else {
				this.refs.name.value = "";
				this.refs.password.value = "";
				this.refs.initial.value = "";
				axios.post('/signIn', {
					name,
					password
				}).then(res => {
					if (!res) {
						return Promise.reject();
					}
					console.log(res);
//					window.location.href = "/home";
				}).catch(err => console.error(err))
			}
		} else {
			this.refs.name.focus();
		}
	}

	renderMsg(){
		if(this.state.err === true){
			return {__html:"Password Missmatch"};
		}
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="name" ref='name' autoFocus/>			
					<input type="password" placeholder="confirm password"  ref="initial"/>
					<input type="password" placeholder="password" ref="password"/>
					<p dangerouslySetInnerHTML={this.renderMsg()} style={{color:"red"}}/>
					<button>Submit</button>
					<div>
						<NavLink to="/login">Or Login Here</NavLink>
					</div>	
				</form>	  
			</div>		
		);
	}
}