import express from "express";
import { readFile, writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";

const app = express();
app.use(express.json());
const port = 3025;

const DATABASE_URI = "./database/database.json";

app.get("/", (request, response) => {
	response.send("Hello World");
});

app.get("/todos/", async (request, response) => {
	const data = await readFile(DATABASE_URI, "utf8");
	const json = JSON.parse(data);
	console.log(json);
	response.json(json.todos); // JSON.stringify(jason)
});

app.post("/todos/", async (request, response) => {
	const data = await readFile(DATABASE_URI, "utf8");
	const json = JSON.parse(data);
	console.log(request.body);
	const todo = {
		...request.body,
		id: uuid(),
	};
	json.todos.push(todo);
	await writeFile(DATABASE_URI, JSON.stringify(json));
	response.status(201);
	response.json(todo);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
