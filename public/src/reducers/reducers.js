const displayNotes = (state = [], action) => {
	switch (action.type) {
		case "DISPLAY_NOTES":
			return [
				...state,
				...action.notes
			];
			break;
		default:
			return state;
			break;
	}
}


export {
	displayNotes,
}