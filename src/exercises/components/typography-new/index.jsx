import React from "react";
import styles from "./styles.module.css";

const Typography = ({ children, className, variant = "p", component = variant, ...rest }) => {
	const Component = component;
	return (
		<Component {...rest} className={[styles.Typography, className, styles[variant]].join(" ")}>
			{children}
		</Component>
	);
};

export default Typography;
