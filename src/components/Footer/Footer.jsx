import React from "react";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.footer__content}`}>
				<div className={styles.footer__copyright}>© 2023 Rick and Morty</div>
			</div>
		</footer>
	);
}

export default Footer;
