import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./answers.module.css";

function Answers() {
	const { rightAnswers } = useSelector((store) => store.rightAnswersStore);
	const { wrongAnswers } = useSelector((store) => store.wrongAnswersStore);
	const { answersType } = useParams();
	return (
		<div className={`${styles.answers} container`}>
			<Link to="/results">
				<Button>← К результатам</Button>
			</Link>
			{answersType === "right-answers" ? (
				<div>
					<h2 className={styles.answers__title}>Правильные ответы</h2>
					{rightAnswers.length !== 0 ? (
						<>
							<div className={styles.answers__wrapper}>
								{rightAnswers.map((el) => (
									<CharacterCard key={el.id} name={el.name} image={el.image} />
								))}
							</div>
						</>
					) : (
						<div className={styles.answers__noCards}>У вас нет правильных ответов, попробуйте снова!</div>
					)}
				</div>
			) : (
				<div>
					<h2 className={styles.answers__title}>Неправильные ответы</h2>
					{wrongAnswers.length !== 0 ? (
						<>
							<div className={styles.answers__wrapper}>
								{wrongAnswers.map((el) => (
									<CharacterCard key={el.id} name={el.name} image={el.image} />
								))}
							</div>
						</>
					) : (
						<div className={styles.answers__noCards}>Ни одной ошибки, так держать!</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Answers;
