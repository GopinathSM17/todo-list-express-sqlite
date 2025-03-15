import { sqlite3 } from "sqlite3";

import { 
    createUserTable,
    createProjectTable,
    createTaskTable,
    createProjectCommentTable,
    createTaskCommentTable
 } from "./tables";

const sql = sqlite3.verbose();

const db = new sql.Database('./tutorial.db', connected);

const connected = (err)=> {
    if(err){
        console.log("Database creation failed :", err.message);
        return ;
    }
    console.log("Database is successfully created");
    
}

// Creation of all the table 

createUserTable();

createProjectTable();

createTaskTable();

createProjectCommentTable();

createTaskCommentTable();

export {db}