import React from "react";
import Card from "../components/Card/card.jsx";
import styles from "../components/Card/card.module.css";
import Typo from "../components/Typography";
/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */
let id = 0;
const items = Array.from({ length: 5 }, (_, index) => ({
	id: id++,
	headline: "こんにちは",
	description:
		"Kyoto (/ˈkjoʊtoʊ/;[3] Japanese: 京都, Kyōto [kʲoꜜːto], officially Kyoto City (京都市, Kyōto-shi, [kʲoːtoꜜɕi] ), is the capital city of Kyoto Prefecture in Japan. Located in the Kansai region on the island of Honshu, Kyoto forms a part of the Keihanshin metropolitan area along with Osaka and Kobe. As of 2021, the city has a population of 1.45 million, making up 57% of the prefecture's total population. The city is the cultural anchor of a substantially larger metropolitan area known as Greater Kyoto, a metropolitan statistical area (MSA) home to a census-estimated 3.8 million people in 2020 and ranking as the second MSA in the Kansai region.",
	image: {
		src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		alt: "Some random photo of Japan",
	},
}));

const Exercise = () => {
	return (
		<div className={styles.CardsGrid}>
			{items.map((item) => (
				<Card
					key={item.id}
					headline={item.headline}
					description={item.description}
					image={item.image}
				/>
			))}
		</div>
	);
};

export default Exercise;
