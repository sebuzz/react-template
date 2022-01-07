import React from "react";
import styles from "./styles.module.css";

const ListItem = ({ children, className, style = {}, marker, markerColor, ...rest }) => {
	return (
		<li
			{...rest}
			className={[styles.ListItem, className].join(" ")}
			style={{
				...style,
				"--marker": marker ? `"${marker} " ` : undefined,
				"--marker-color": markerColor,
			}}
		>
			{children}
		</li>
	);
};

export default ListItem;
