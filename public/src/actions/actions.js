import uuid from 'node-uuid';
import moment from 'moment';


const displayNotes = (notes) => {
	return {
		type: "DISPLAY_NOTES",
		notes
	}
}

const startDisplayNotes = () => {
	return (dispatch) => {
		let notes = [
			{
				id: uuid(),
				title: "Design thinking",
				text: "the philosophy of design thinking is as old as man",
				date: moment().valueOf(),
			},
			{
				id: uuid(),
				title: "Best practices js",
				text: "A wise man once said we think the we code",
				date: moment().valueOf(),
			}
		]
		return dispatch(displayNotes(notes));
	}
}


export {
	displayNotes,
	startDisplayNotes
}
