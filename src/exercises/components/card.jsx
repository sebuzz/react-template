import React, { useState } from "react";
import styles from "./card.module.css";

const Card = ({ headline, description, image }) => {
	const [hidden, setHidden] = useState(false); // [Boolean, Function]
	return (
		<article className={styles.Cards}>
			<figure className={styles.CardMedia}>
				<img src={image.src} alt={image.alt} className={styles.CardImage} />
			</figure>

			<h1 className={styles.CardHeadline}>{headline}</h1>
			{/*<aside className={`${styles.CardDescription} ${hidden ? styles.isHidden : ""}`}>*/}
			{/*	{description}*/}
			{/*</aside>*/}

			<footer className={styles.CardActions}>
				<button
					onClick={() => {
						// console.log("irgendwas");
						setHidden((state) => !state);
					}}
					className={styles.CardButton}
				>
					{hidden ? "Hide description" : "Show description"}
				</button>
				{hidden ? <div className={styles.CardDescription}>{description}</div> : null}
			</footer>
		</article>
	);
};

export default Card;
