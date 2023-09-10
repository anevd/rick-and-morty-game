import React from "react";
import { Card } from "antd";
import styles from "./characterCard.module.css";

const { Meta } = Card;

function CharacterCard({ name, image }) {
	return (
		<Card className={styles.card} cover={<img alt={name} src={image} />}>
			<Meta title={name} />
		</Card>
	);
}

export default CharacterCard;
