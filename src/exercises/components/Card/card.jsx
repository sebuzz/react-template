import React, { useState } from "react";
import styles from "./card.module.css";

import Button from "../Button";
import Typo from "../Typography";

const Card = ({ headline, description, image }) => {
	const [hidden, setHidden] = useState(false); // [Boolean, Function]
	return (
		<article className={styles.Card}>
			<figure className={styles.CardMedia}>
				<img src={image.src} alt={image.alt} className={styles.CardImage} />
			</figure>

			<Typo variant={"h1"} className={styles.CardHeadline}>
				{headline}
			</Typo>
			{/*<aside className={`${styles.CardDescription} ${hidden ? styles.isHidden : ""}`}>*/}
			{/*	{description}*/}
			{/*</aside>*/}

			<footer className={styles.CardActions}>
				<Button
					onClick={() => {
						// console.log("irgendwas");
						setHidden((state) => !state);
					}}
					// className={styles.CardButton}
				>
					{hidden ? "Hide description" : "Show description"}
				</Button>
				{hidden ? (
					<div className={styles.CardDescription}>
						<Typo>{description}</Typo>
					</div>
				) : null}
			</footer>
		</article>
	);
};

export default Card;
