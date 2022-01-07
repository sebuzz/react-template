import React from "react";
import styles from "./styles.module.css";

// const Index = ({ children, className, variant, items, ...props }) => {
// 	let itemsList = [];
// 	return (
// 		<ul className={styles.test}>
// 			{items.map((item) => {
// 				<li>{item}</li>;
// 			})}
// 		</ul>
// 	);
// };

const List = ({ children, className, variant, ...props }) => {
	return (
		<ul {...props} className={[styles.List, className].join(" ")}>
			{children}
		</ul>
	);
};

export default List;
