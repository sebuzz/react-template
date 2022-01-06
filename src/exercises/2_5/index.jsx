import React from "react";
import Button from "../components/Button";
import List from "../components/List/List";

// const Button = (prop) => {
// 	return <button>Click Me</button>;
// };

/**
 *
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const Exercise = () => {
	return (
		<div>
			<Button className={"irgendwas"} aria-label={"gelb"}>
				Click me
			</Button>

			<List items={["milk", "sugar", "eggs", "flower"]} />
		</div>
	);
};

export default Exercise;
