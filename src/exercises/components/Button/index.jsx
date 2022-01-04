import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, className, ...props }) => {
	return (
		<button {...props} className={[styles.Button, className].join("")}>
			{children}
		</button>
	);
};

export default Button;
