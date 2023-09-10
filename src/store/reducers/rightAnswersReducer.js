import { mainTypes } from "../actions/actionTypes";

const initialState = {
	rightAnswers: [],
};

export function rightAnswersReducer(state = initialState, action) {
	switch (action.type) {
		case mainTypes.ADD_RIGHT_ANSWER: {
			const answer = action.payload;
			return { ...state, rightAnswers: [...state.rightAnswers, answer] };
		}
		case mainTypes.DELETE_RIGHT_ANSWERS: {
			return { ...state, rightAnswers: [] };
		}
		default: {
			return state;
		}
	}
}
