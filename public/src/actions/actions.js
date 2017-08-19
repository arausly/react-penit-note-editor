import uuid from 'node-uuid';
import moment from 'moment';
import axios from 'axios';


const displayNotes = (notes) => {
	return {
		type: "DISPLAY_NOTES",
		notes
	}
}

const startDisplayNotes = () => {
	return (dispatch) => {
		let notes = [];
//		try {
//			return axios.get('/notes')
//				.then(res => {
//					res.data.map(note => notes.push(Object.assign({}, note, {
//						id: note._id,
//						date: moment().valueOf()
//					})));
//					dispatch(displayNotes(notes));
//				})
//		}catch (err) {}
	}
}


export {
	displayNotes,
	startDisplayNotes
}
