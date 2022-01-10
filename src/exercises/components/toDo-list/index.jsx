import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import Form from "../../../solutions/components/form";

const ToDoList = ({ id }) => {
	// State management
	const [newToDo, setNewToDo] = useState("");
	const [toDos, setToDos] = useState([]);

	// Side effects // useEffect() will be called after the DOM was rendered
	useEffect(() => {
		const previousToDos = JSON.parse(window.localStorage.getItem(id));
		console.log(previousToDos);
		setToDos(previousToDos ?? []);
	}, [id]);
	// with useCallback() the function below gets memoized so that it only gets re-created when the dependencies change // what exactly are the dependencies here? [] is what?
	const save = useCallback((toDos) => {
		window.localStorage.setItem(id, JSON.stringify(toDos));
	}, []);

	return (
		<div>
			<Form
				onSubmit={(values) => {
					// the values here are probably the toDos
					console.log("-->", values);

					const newToDos = [
						...toDos,
						{ name: values[`toDo:${id}`], id: v4(), isChecked: false },
					];
					console.log("newToDos ---> ", newToDos); // newToDos is now the complete updated to do list
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

export default ToDoList;
