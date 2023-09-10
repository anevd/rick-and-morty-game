import { mainTypes } from "../actions/actionTypes";

const initialState = {
	characters: [],
};

export function mainReducer(state = initialState, action) {
	switch (action.type) {
		case mainTypes.ADD_CHARACTER: {
			const character = action.payload;
			return { ...state, character };
		}
		case mainTypes.ADD_CHARACTERISTIC: {
			const characteristic = action.payload;
			return { ...state, characteristic };
		}
		default: {
			return state;
		}
	}
}
