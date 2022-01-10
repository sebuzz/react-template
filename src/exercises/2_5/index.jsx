import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Flex from "../components/flex";
import ToDoList from "../components/toDo-list";
import styled from "@emotion/styled";
/**
 *
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable Index and ListItem component
 */

// const Code = ({ code }) => (
// 	<pre>
// 		<code>{JSON.stringify(code, null, 4)}</code>
// 	</pre>
// );
// const LOCAL_STORAGE_KEY = "uisdufh";

const Spacer = styled.div`
	background-color: ${(props) => (props.colored ? "#eee" : "none")};
	height: ${(props) => (props.large ? "300px" : "100px")};
	width: 100%;
	&:hover {
		background: lightsalmon;
	}
`;
const RedButton = styled.button`
	background: red;
`;

const Exercise = () => {
	return (
		<div>
			<br />
			<Flex>
				<Typography variant="h3">To Do List</Typography>
				<br />
			</Flex>
			<Flex align="align-end">
				<ToDoList id="fdsfg" />
			</Flex>
			<Flex direction="column">
				<Spacer colored />
				<div>
					<ToDoList id="dfsf" />
				</div>
				<Spacer colored large />
				<Button
					sx={"background: red"}
					variant={"contained"}
					className="pink"
					onClick={() => {
						window.location.href = "../";
					}}
				>
					Back to Home
				</Button>
				<Spacer />
				<Typography variant="h2" component="h1">
					h1 Headline styled as h2
				</Typography>
				<Typography variant="h4" component="h2">
					h2 Headline styled as h4
				</Typography>
			</Flex>
			<br />
			<br />
		</div>
	);
};

export default Exercise;
