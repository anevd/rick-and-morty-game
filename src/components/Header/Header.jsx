import React from "react";
import styles from "./header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__title}>Rick and Morty game</div>
				<div className={styles.header__descr}> How well do you know the characters?</div>
			</div>
		</header>
	);
}

export default Header;
