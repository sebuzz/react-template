import React from "react";
import styles from "./styles.module.css";

const List = ({ children, className, variant, ...props }) => {
	switch (variant) {
		case "ol":
			return (
				<ol {...props} className={[styles.List, className].join(" ")}>
					{children}
				</ol>
			);
		default:
			return (
				<ul {...props} className={[styles.List, styles[className], className].join(" ")}>
					{children}
				</ul>
			);
	}
};

export default List;
