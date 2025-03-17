import sqlite3 from "sqlite3";

import {
    createUserTable,
    createProjectTable,
    createTaskTable,
    createProjectCommentTable,
    createTaskCommentTable
} from "./tables.js";

const sql = sqlite3.verbose();

const db = new sql.Database('./todoList.db', sqlite3.OPEN_READWRITE, connected);

function connected(err) {
    if (err) {
        console.log("Database creation failed :", err.message);
        return;
    }
    console.log("Database is successfully created");

}

db.run("PRAGMA foreign_keys = ON;", (err) => {
    if (err) {
        console.error("Error enabling foreign keys:", err.message);
        return;
    }
    console.log("Foreign keys enabled.");
});

// Creation of all the table 

createUserTable();

createProjectTable();

createTaskTable();

createProjectCommentTable();

createTaskCommentTable();

export { db }