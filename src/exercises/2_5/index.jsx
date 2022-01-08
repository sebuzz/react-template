import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import Flex from "../components/flex";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Form from "../../solutions/components/form";
import Typo from "../components/Typography";

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

// const Code = ({ code }) => (
// 	<pre>
// 		<code>{JSON.stringify(code, null, 4)}</code>
// 	</pre>
// );
// const LOCAL_STORAGE_KEY = "uisdufh";

const myList = [
	{ name: "milk", id: "milk" },
	{ name: "sugar", id: "sugar" },
	{ name: "eggs", id: "eggs" },
	{ name: "flour", id: "flour" },
];
const myList2 = [
	{ name: "apple", id: "apple" },
	{ name: "banana", id: "banana" },
	{ name: "pear", id: "pear" },
	{ name: "orange", id: "orange" },
];

const ToDoList = ({ id }) => {
	// State management
	const [newToDo, setNewToDo] = useState("");
	const [toDos, setToDos] = useState([]);

	// Side effects
	useEffect(() => {
		const previousToDos = JSON.parse(window.localStorage.getItem(id));
		console.log(previousToDos);
		setToDos(previousToDos ?? []);
	}, [id]);

	const save = useCallback((toDos) => {
		window.localStorage.setItem(id, JSON.stringify(toDos));
	}, []);

	return (
		<div>
			<Form
				onSubmit={(values) => {
					console.log(values);

					const newToDos = [
						...toDos,
						{ name: values[`toDo:${id}`], id: v4(), isChecked: false },
					];
					setToDos(newToDos);
					save(newToDos);
					setNewToDo("");
				}}
			>
				<Stack direction="row" gap={2}>
					<TextField
						variant="standard"
						label="Add toDo"
						value={newToDo}
						type="text"
						name={`toDo:${id}`}
						onChange={(_event) => {
							setNewToDo(_event.target.value);
						}}
					/>
					<Button type="submit" variant="contained" disabled={!newToDo}>
						add
					</Button>
				</Stack>
			</Form>
			<div>
				<Button
					onClick={() => {
						const newToDos = toDos.filter((item) => !item.isChecked);
						setToDos(newToDos);
						save(newToDos);
					}}
				>
					Clear completed
				</Button>
			</div>
			<List>
				{toDos.map((item, index) => {
					return (
						<ListItem
							key={item.id}
							disablePadding
							secondaryAction={
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => {
										const nextState = [...toDos];
										nextState.splice(index, 1);
										setToDos(nextState);
										save(nextState);
									}}
								>
									<ClearIcon />
								</IconButton>
							}
						>
							<ListItemButton
								//disableRipple // toggle Effect on List Items
								dense
								onClick={() => {
									const nextState = [...toDos];
									nextState[index].isChecked = !nextState[index].isChecked;

									setToDos(nextState);
									save(nextState);
								}}
							>
								<ListItemIcon>
									<Checkbox
										edge="start"
										checked={item.isChecked}
										tabIndex={-1}
										disableRipple
										//id={item.id} // eigentlich unnötig
										inputProps={{ "aria-labelledby": `label:${item.id}` }}
									/>
								</ListItemIcon>
								<ListItemText
									id={`label:${item.id}`}
									primary={item.name}
									sx={{
										textDecoration: item.isChecked ? "line-through" : "none",
									}}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</div>
	);
};

const Exercise = () => {
	return (
		<div>
			<br />
			<Flex>
				<Typography variant="h3">To Dos and To Don`ts</Typography>
				<br />
			</Flex>
			<Flex align="align-end">
				<ToDoList toDos={myList2} id="fdsfg" />
			</Flex>
			<Flex direction="column">
				<div>
					<ToDoList toDos={myList} id="dfsf" />
				</div>
				<br />
				<br />
				<br />
				<br />
				<Button
					variant={"outlined"}
					className="pink"
					onClick={() => {
						window.location.href = "../";
					}}
				>
					Back to Home
				</Button>
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
