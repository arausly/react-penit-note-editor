import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	connect
} from 'react-redux';


export class NoteEditor extends Component {
	constructor(props) {
		super(props);
		this.passTextVal = this.passTextVal.bind(this);
		this.state = {
			notes:""
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
				notes: titleId[0].text
			});
		}
	}
	
   		passTextVal(){
	   	 this.props.handleText(this.state.notes);
	  }  
	componentWillUpdate(nextProps,nextstate){
	   this.passTextVal();	
	}
	render(){
		const {id,displayNotes} = this.props;
		return(
		   <div>
				<textarea placeholder="Enter Note" value={this.state.notes} ref={e =>this.text = e}
				  onChange = {()=>{
						this.setState({notes:this.text.value});
					}}
					>
			  </textarea>
		   </div>	
		);
	}
}

export default connect(state => state)(NoteEditor);