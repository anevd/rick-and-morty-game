import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { mainReducer } from "./reducers/mainReducer";
import { rightAnswersReducer } from "./reducers/rightAnswersReducer";
import { wrongAnswersReducer } from "./reducers/wrongAnswersReducer";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();

const reducer = combineReducers({
	mainStore: mainReducer,
	rightAnswersStore: rightAnswersReducer,
	wrongAnswersStore: wrongAnswersReducer,
});

const store = configureStore({
	reducer: reducer,
	preloadedState,
});

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
