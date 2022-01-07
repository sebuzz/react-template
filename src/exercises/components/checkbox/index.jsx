import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({ label, ...props }) => {
	return (
		<label>
			<div>{label}</div>
			<input type={"checkbox"} {...props} className={styles.Input} />
			<div className={styles.Check} />
		</label>
	);
};

export default Checkbox;
