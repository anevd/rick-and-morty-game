import { mainTypes } from "./actionTypes";

export const addCharacterAC = (character) => ({
	type: mainTypes.ADD_CHARACTER,
	payload: character,
});

export const addCharacteristicAC = (characteristic) => ({
	type: mainTypes.ADD_CHARACTERISTIC,
	payload: characteristic,
});

export const addRightAnswerAC = (character) => ({
	type: mainTypes.ADD_RIGHT_ANSWER,
	payload: character,
});

export const addWrongAnswerAC = (character) => ({
	type: mainTypes.ADD_WRONG_ANSWER,
	payload: character,
});

export const deleteRightAnswersAC = (rightAnswers) => ({
	type: mainTypes.DELETE_RIGHT_ANSWERS,
});

export const deleteWrongAnswersAC = (wrongAnswers) => ({
	type: mainTypes.DELETE_WRONG_ANSWERS,
});

export const getRandomCharacterThunk = () => (dispatch) => {
	const random = Math.ceil(Math.random() * 826);
	fetch(`https://rickandmortyapi.com/api/character/${random}`)
		.then((data) => data.json())
		.then((res) => dispatch(addCharacterAC(res)));
};

export const getRandomCharacteristicThunk = () => (dispatch) => {
	const allCharacteristics = [
		{
			type: "gender",
			options: ["Male", "Female", "Genderless", "unknown"],
		},
		{
			type: "status",
			options: ["Alive", "Dead", "unknown"],
		},
		{
			type: "species",
			options: ["Human", "Alien", "Animal"],
		},
	];
	const randomCharacteristic = allCharacteristics[Math.ceil(Math.random() * allCharacteristics.length - 1)];
	dispatch(addCharacteristicAC(randomCharacteristic));
};
