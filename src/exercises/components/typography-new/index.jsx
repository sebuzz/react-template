import React from "react";
import styles from "./styles.module.css";

const typoVariants = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h3",
	subtitle2: "h4",
	body1: "p",
	body2: "p",
	button: "span",
	caption: "div",
	overline: "div",
};

const Typography = ({
	children,
	className,
	variant = "body1",
	component = typoVariants[variant] ?? "span",
	...rest
}) => {
	const Component = component;
	return (
		<Component {...rest} className={[styles.Typography, styles[variant], className].join(" ")}>
			{children}
		</Component>
	);
};

export default Typography;
