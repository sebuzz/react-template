import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={[styles.Button, className].join("")}>
			{children}
		</button>
	);
};

export default Button;
