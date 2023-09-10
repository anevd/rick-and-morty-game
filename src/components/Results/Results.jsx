import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { deleteRightAnswersAC, deleteWrongAnswersAC } from "../../store/actions/mainActions";
import styles from "./results.module.css";

function Results() {
	const dispatch = useDispatch();
	const { rightAnswers } = useSelector((store) => store.rightAnswersStore);
	const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);
	function clearResult() {
		dispatch(deleteRightAnswersAC());
		dispatch(deleteWrongAnswersAC());
	}
	return (
		<div className={`${styles.results} container`}>
			<Link to="/">
				<Button onClick={clearResult}>← Играть снова</Button>
			</Link>
			<h2 className={styles.results__title}>Игра окончена</h2>
			<div className={styles.results__descr}>Правильных ответов: {rightAnswers.length}</div>
			<div className={styles.results__descr}>Неправильных ответов: {wrongAnswers.length}</div>
			<div className={styles.results__buttonWrapper}>
				<Link to={`/${"right-answers"}`}>
					<Button className={styles.game__button}>Правильные ответы</Button>
				</Link>
				<Link to={`/${"wrong-answers"}`}>
					<Button className={styles.game__button}>Неправильные ответы</Button>
				</Link>
			</div>
		</div>
	);
}

export default Results;
