import React from "react";
import styles from "./styles.module.css";

const Typo = ({ children, className, variant, ...props }) => {
	switch (variant) {
		case "h1":
			return (
				<h1 {...props} className={[styles.h1, className].join(" ")}>
					{children}
				</h1>
			);

		case "h2":
			return (
				<h2 {...props} className={[styles.h2, className].join(" ")}>
					{children}
				</h2>
			);

		case "h3":
			return (
				<h3 {...props} className={[styles.h3, className].join(" ")}>
					{children}
				</h3>
			);
		case "h4":
			return (
				<h4 {...props} className={[styles.h4, className].join(" ")}>
					{children}
				</h4>
			);

		case "mono":
			return (
				<span {...props} className={[styles.mono, className].join(" ")}>
					{children}
				</span>
			);

		case "subtitle1":
			return (
				<span {...props} className={[styles.subtitle1, className].join(" ")}>
					{children}
				</span>
			);

		default:
			return (
				<p {...props} className={[styles.sans, className].join(" ")}>
					{children}
				</p>
			);
	}
};

export default Typo;
