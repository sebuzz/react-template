import React, { useState } from "react";
import styles from "./styles.module.css";

const Checkbox = ({ label, id, ...props }) => {
	const wasChecked = window.localStorage.getItem(id) === "true";
	const [isChecked, setChecked] = useState(wasChecked);

	return (
		<label>
			<div>{label}</div>
			<input
				{...props}
				type="checkbox"
				id={id}
				className={styles.Input}
				checked={isChecked}
				onClick={() => {
					const willBeChecked = !isChecked;
					window.localStorage.setItem(id, willBeChecked ? "true" : "false");
					setChecked(willBeChecked);
				}}
			/>
			<div className={styles.Check} />
		</label>
	);
};

export default Checkbox;
