export default (state, action) => {
	switch(action.type) {
		case "TOGGLE_AUTH":
			return {
				...state,
				auth: !state.auth
			}
		case "INC_SCORE":
			return {
				...state,
				score: state.score + 1
			}
		case "INC_INDEX":
			return {
				...state,
				currentIndex: state.currentIndex + 1
			}
		case "SET_QUESTIONS":
			return {
				...state,
				questions: action.payload
			}
		default:
			return state;
	}
}