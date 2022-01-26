import express from "express";

// const express = require('express')

const app = express();
const port = 3025;

const jason = {
	Todos: [
		{
			name: "Sebastian",
			city: "Hamburg",
		},
		{
			name: "Florian",
			city: "Frankfurt",
		},
	],
};
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.get("/todos/", (request, response) => {
	response.json(jason); // JSON.stringify(jason)
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
