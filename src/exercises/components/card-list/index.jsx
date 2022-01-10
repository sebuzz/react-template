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

const CardList = ({ id }) => {
	// State management
	const [newCard, setNewCard] = useState("");
	const [newImage, setNewImage] = useState("");
	const [cards, setCards] = useState([]);

	// Side effects // useEffect() will be called after the DOM was rendered
	useEffect(() => {
		const previousCards = JSON.parse(window.localStorage.getItem(id));
		console.log(previousCards);
		setCards(previousCards ?? []);
	}, [id]);
	// with useCallback() the function below gets memoized so that it only gets re-created when the dependencies change // what exactly are the dependencies here? [] is what?
	const save = useCallback((cards) => {
		window.localStorage.setItem(id, JSON.stringify(cards));
	}, []);

	return (
		<div>
			<Form
				onSubmit={(values) => {
					// the values here are probably the cards
					console.log("-->", values);

					const newCards = [
						...cards,
						{
							name: values[`card:${id}`],
							id: v4(),
							isChecked: false,
							image: values[`img:${id}`],
						},
					];
					console.log("newCards ---> ", newCards); // newCards is now the complete updated cards list
					setCards(newCards);
					save(newCards);
					setNewCard("");
				}}
			>
				<Stack direction="column" gap={8}>
					<TextField
						variant="standard"
						label="Add Card"
						value={newCard}
						type="text"
						name={`card:${id}`}
						onChange={(_event) => {
							setNewCard(_event.target.value);
						}}
					/>
					<TextField
						variant="standard"
						label="Add Image"
						value={newImage}
						type="text"
						name={`img:${id}`}
						onChange={(_event) => {
							console.log(_event.target.value);
							setNewImage(_event.target.value);
						}}
					/>
					<Button type="submit" variant="contained" disabled={!newCard}>
						add
					</Button>
				</Stack>
			</Form>
			<div>
				<Button
					onClick={() => {
						const newCards = cards.filter((item) => !item.isChecked);
						setCards(newCards);
						save(newCards);
					}}
				>
					Clear Checked
				</Button>
			</div>
			<List>
				{cards.map((item, index) => {
					return (
						<ListItem
							key={item.id}
							disablePadding
							secondaryAction={
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => {
										const nextState = [...cards];
										nextState.splice(index, 1);
										setCards(nextState);
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
									const nextState = [...cards];
									nextState[index].isChecked = !nextState[index].isChecked;

									setCards(nextState);
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

export default CardList;
