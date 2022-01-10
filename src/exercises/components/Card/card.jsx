import React, { useState } from "react";
import styles from "./card.module.css";

import Button from "../Button";
import Typo from "../Typography";
import Typography from "../typography-new";
import Checkbox from "../checkbox";

const Card = ({
	headline = `HEADLINE`,
	description = `Test Description`,
	image = "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
}) => {
	const [hidden, setHidden] = useState(false); // [Boolean, Function]
	return (
		<article className={styles.Card}>
			<figure className={styles.CardMedia}>
				<img src={image} alt={image.alt} className={styles.CardImage} />
			</figure>

			<Typography variant={"h2"} component={"h2"} className={styles.CardHeadline}>
				{headline}
			</Typography>
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
						<Typo variant={"sans"}>{description}</Typo>
					</div>
				) : null}
				{/*<Checkbox label={"Hallo"} />*/}
			</footer>
		</article>
	);
};

export default Card;
