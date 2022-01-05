import React from "react";
import styles from "./styles.module.css";

const List = ({ children, className, variant, items, ...props }) => {
	let itemsList = [];
	return (
		<ul className={styles.test}>
			{items.map((item) => {
				<li>{item}</li>;
			})}
		</ul>
	);
};

export default List;
