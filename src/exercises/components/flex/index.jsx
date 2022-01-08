import React from "react";
import styles from "./styles.module.css";

const Flex = ({ children, className, direction, justify, align }) => {
	return (
		<div
			className={[
				styles.Flex,
				className,
				styles[direction],
				styles[justify],
				styles[align],
			].join(" ")}
		>
			{children}
		</div>
	);
};

export default Flex;
