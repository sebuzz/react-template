import Container from "@mui/material/Container";
import React, { useCallback, useEffect, useState } from "react";
import CardList from "../exercises/components/card-list";
import Card from "../exercises/components/Card/card";
import styles from "../exercises/components/Card/card.module.css";
import Layout from "../exercises/components/layout";

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

const myItems = Array.from({ length: 5 }, (_, index) => ({}));

// const actualCards = ({ id }) => {
// 	const [myCards, setMyCards] = useState([]);
// 	useEffect(() => {
// 		const myCard = JSON.parse(window.localStorage.getItem(id));
// 		myCards.push(myCard);
// 	}, [id]);
// };

const CardCreator = ({ id = "cities" }) => {
	// State management
	const [newCard, setNewCard] = useState("");
	const [cards, setCards] = useState([]);

	// Side effects // useEffect() will be called after the DOM was rendered
	useEffect(() => {
		const previousCards = JSON.parse(window.localStorage.getItem(id));
		console.log(previousCards);
		setCards(previousCards ?? []);
		console.log("==> =>", cards);
	}, [id]);
	// with useCallback() the function below gets memoized so that it only gets re-created when the dependencies change // what exactly are the dependencies here? [] is what?
	const save = useCallback((cards) => {
		window.localStorage.setItem(id, JSON.stringify(cards));
	}, []);
	return (
		<div className={styles.CardsGrid}>
			{console.log("==>", cards)}
			{cards.map((item, index) => (
				<Card
					key={item.id}
					headline={item.name}
					description={item.description}
					image={item.image}
				/>
			))}
		</div>
	);
};

const CardGrid = ({ id }) => {
	return (
		<Layout>
			<Container maxWidth="xs">
				<CardList id="cities" />
			</Container>

			{/*<div className={styles.CardsGrid}>*/}
			<CardCreator id="cities" />
			{/*	{console.log("==>", cards)}*/}
			{/*	{cards.map((item, index) => (*/}
			{/*		<Card*/}
			{/*			key={item.id}*/}
			{/*			headline={item.name}*/}
			{/*			// description={item.description}*/}
			{/*			// image={item.image}*/}
			{/*		/>*/}
			{/*	))}*/}
			{/*</div>*/}
		</Layout>
	);
};

export default CardGrid;
