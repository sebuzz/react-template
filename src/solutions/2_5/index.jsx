import React from "react";
import List from "../components/list";
import ListItem from "../components/list-item";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import RadioButton from "../components/radio-button/index.jsx";
import Typography from "../components/typography";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable Index and ListItem component
 */
const Exercise = () => {
	return (
		<div>
			<div style={{ margin: 100 }}>
				<RadioButton
					label="Male"
					name="happy"
					onChange={(event_) => {
						console.log(event_.target.checked);
					}}
				/>
				<br />
				<RadioButton
					label="Female"
					name="happy"
					onChange={(event_) => {
						console.log(event_.target.checked);
					}}
				/>
			</div>

			<div style={{ margin: 100 }}>
				<Checkbox
					label="I accept the policy"
					onChange={(event_) => {
						console.log(event_.target.checked);
					}}
				/>
				<br />
				<Checkbox
					label="I am always checked"
					checked
					onChange={(event_) => {
						console.log(event_.target.checked);
					}}
				/>
			</div>

			<Typography variant="h1">Headline 1</Typography>
			<Typography variant="h2">Headline 2</Typography>
			<Typography variant="h3">Headline 3</Typography>
			<Typography variant="h4">Headline 4</Typography>
			<Typography variant="h5">Headline 5</Typography>
			<Typography variant="h6">Headline 6</Typography>
			<Typography variant="subtitle1">Subtitle 1</Typography>
			<Typography variant="subtitle2">Subtitle 2</Typography>
			<Typography variant="body1">Body 1</Typography>
			<Typography variant="body2">Body 2</Typography>
			<Typography variant="button">Button text</Typography>
			<Typography variant="caption">Caption text</Typography>
			<Typography variant="overline">Overline</Typography>

			<Typography variant="h1" component="h2">
				Headline 1 as h2
			</Typography>
			<Typography variant="h2" component="h3">
				Headline 2 as h3
			</Typography>
			<Typography variant="h1" component="h4">
				Headline 2 as h4
			</Typography>
			<Typography variant="subtitle2" component="h2">
				Subtitle 2 as h2
			</Typography>

			<br />
			<br />

			<br />
			<br />
			<Button
				className="custom-button foo bar"
				onClick={() => {
					console.log("Custom Button");
				}}
			>
				Please click me
			</Button>
			<br />
			<button
				className="native-button"
				onClick={() => {
					console.log("Native Button");
				}}
			>
				I am native
			</button>

			<List>
				<ListItem className="first">Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
			</List>

			<List variant="ol">
				<ListItem className="first">Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
			</List>

			<List marker="-">
				<ListItem className="first">Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>
					<Typography variant="overline" component="h3">
						Item 3
					</Typography>
					<List>
						<ListItem>Item 3.1</ListItem>
						<ListItem>Item 3.2</ListItem>
						<ListItem>Item 3.3</ListItem>
					</List>
				</ListItem>
				<ListItem>
					<Typography variant="overline" component="h3">
						Item 4
					</Typography>
					<List marker="+" markerColor="#fe23ba">
						<ListItem>Item 4.1</ListItem>
						<ListItem markerColor="#2143fe">Item 4.2</ListItem>
						<ListItem marker="+++" markerColor="#2143fe">
							Item 4.3
						</ListItem>
					</List>
				</ListItem>
				<ListItem>
					<Typography variant="overline" component="h3">
						Item 5
					</Typography>
					<List>
						{Array.from({ length: 10 }, (_, index) => (
							<ListItem
								key={index}
								marker="▶︎"
								markerColor={`hsl(${(360 / 10) * index}, 200%, 50%)`}
							>
								Item 5.{index + 1}
							</ListItem>
						))}
					</List>
				</ListItem>
			</List>

			<List marker="❌">
				<ListItem className="first">Item 1</ListItem>
				<ListItem marker="✅">Item 2</ListItem>
				<ListItem marker="✅">Item 3</ListItem>
				<ListItem marker="✅">Item 4</ListItem>
				<ListItem>Item 5</ListItem>
				<ListItem marker="⚠️">
					<Typography>Item 6</Typography>
					<List marker="❌">
						<ListItem>Item 6.1</ListItem>
						<ListItem marker="✅">Item 6.2</ListItem>
						<ListItem marker="✅">Item 6.3</ListItem>
						<ListItem marker="✅">Item 6.4</ListItem>
					</List>
				</ListItem>
				<ListItem marker="💖">Item 7</ListItem>
				<ListItem marker="💖">Item 8</ListItem>
				<ListItem marker="💖">Item 9</ListItem>
				<ListItem marker="💖">Item 10</ListItem>
			</List>
		</div>
	);
};

export default Exercise;
