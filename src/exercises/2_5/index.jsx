import React from "react";
import Button from "../components/Button";
import List from "../components/List";
import Typography from "../components/typography-new";
import Checkbox from "../components/checkbox";

// const Button = (prop) => {
// 	return <button>Click Me</button>;
// };

/**
 *
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable Index and ListItem component
 */

const Exercise = () => {
	return (
		<div>
			<a href={"../"}>Home Menu</a>
			<div> </div>

			<Button aria-label={"gelb"}>Click me</Button>
			<Typography variant={"h2"} component={"h1"}>
				This is an h1 Headline styled as h2
			</Typography>
			<Typography variant={"h4"} component={"h2"}>
				This is an h2 Headline styled as h4
			</Typography>
			<br />
			<br />
			<List>
				<li>
					<Checkbox />
					milk
				</li>
				<li>sugar</li>
				<li>eggs</li>
				<li>flour</li>
			</List>
		</div>
	);
};

export default Exercise;
