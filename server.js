import express from "express";

import cors from 'cors';

import { router } from "./app/router/todoList.router.js";

// to create route, to use middleware, to start the server and listen on to the port we use the App
const app = express();

var corsOptions = {
    origin : ""
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(8000, ()=> console.log(`server is running on port 8000`));

