import { mainTypes } from "../actions/actionTypes";

const initialState = {
	wrongAnswers: [],
};

export function wrongAnswersReducer(state = initialState, action) {
	switch (action.type) {
		case mainTypes.ADD_WRONG_ANSWER: {
			const answer = action.payload;
			return { ...state, wrongAnswers: [...state.wrongAnswers, answer] };
		}
		case mainTypes.DELETE_WRONG_ANSWERS: {
			return { ...state, wrongAnswers: [] };
		}
		default: {
			return state;
		}
	}
}
