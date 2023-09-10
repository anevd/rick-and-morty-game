import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Divider } from "antd";

import styles from "./main.module.css";
import { getRandomCharacterThunk, getRandomCharacteristicThunk, addRightAnswerAC, addWrongAnswerAC } from "../../store/actions/mainActions";
import CharacterCard from "../CharacterCard/CharacterCard";

function Main() {
	const dispatch = useDispatch();
	const { character } = useSelector((store) => store.mainStore);
	const { characteristic } = useSelector((store) => store.mainStore);

	function showCharacter() {
		dispatch(getRandomCharacterThunk());
		dispatch(getRandomCharacteristicThunk());
	}

	function checkAnswer(characteristic, option, character) {
		if (option === character[characteristic.type]) {
			dispatch(addRightAnswerAC(character));
		} else {
			dispatch(addWrongAnswerAC(character));
		}
		showCharacter();
	}

	return (
		<div className={`${styles.game} container`}>
			{!character && (
				<Button className={styles.game__button} onClick={showCharacter}>
					Начать игру
				</Button>
			)}
			{character && <CharacterCard key={character.id} name={character.name} image={character.image} />}
			<div className={styles.buttons}>
				{characteristic &&
					characteristic.options.map((el, index) => (
						<Button key={index} value={el} className={styles.game__button_guess} onClick={() => checkAnswer(characteristic, el, character)}>
							{el}
						</Button>
					))}
			</div>
			{character && (
				<>
					<Divider />
					<Link to="/results">
						<Button className={styles.game__button}>Закончить игру</Button>
					</Link>
				</>
			)}
		</div>
	);
}

export default Main;
