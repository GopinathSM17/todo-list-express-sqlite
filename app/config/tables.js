import { db } from "./db.config.js";


// user table creation
const createQueryForUserTable = `CREATE TABLE IF NOT EXISTS user(
                                    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                    name TEXT NOT NULL,
                                    email TEXT NOT NULL UNIQUE
                                    )`

function createUserTable() {
    db.run(createQueryForUserTable, [], (err) =>{
        if(err){
            console.log(`Creation of user table is unsuccessfull ${err.message}`);
            return;
        }
        console.log(`Creation of user table is successfull`);
    });

}


// project table creation 
const createQueryForProjectTable = `CREATE TABLE IF NOT EXISTS project(
                                    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                    name TEXT NOT NULL,
                                    color TEXT NOT NULL,
                                    is_favourite INTEGER CHECK(is_favourite IN (0, 1)) NOT NULL,
                                    user_id INTEGER,
                                    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
                                    )`;

function createProjectTable() {
    db.run(createQueryForProjectTable, [], (err) => {
        if(err){
            console.log(`Creation of project table is unsuccessfull ${err.message}`);
            return;
        }
        console.log(`Creation of project table is successfull`);
    })
}

// task table creation
const createQueryForTaskTable = `CREATE TABLE IF NOT EXISTS task(
                                    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                    content TEXT NOT NULL,
                                    description TEXT NOT NULL,
                                    due_date DATE NOT NULL,
                                    is_completed INTEGER CHECK(is_completed IN (0, 1)) NOT NULL,
                                    created_at DATE NOT NULL,
                                    project_id INTEGER,
                                    FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
                                     )`;

function createTaskTable() {
    db.run(createQueryForTaskTable, [], (err) => {
        if(err){
            console.log(`Creation of task table is unsuccessfull ${err.message}`);
            return;
        }
        console.log(`Creation of task table is successfull`);
    });
}

// comment for project table creation 

const createQueryForProjectCommentTable = `CREATE TABLE IF NOT EXISTS project_comment(
                                            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                            content TEXT NOT NULL,
                                            posted_at TEXT NOT NULL,
                                            project_id INTEGER NOT NULL,
                                            FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
                                            )`;
8
function  createProjectCommentTable() {
    db.run(createQueryForProjectCommentTable, [], (err) => {
        if(err){
            console.log(`Creation of projectComment table is unsuccessfull ${err.message}`);
            return;
        }
        console.log(`Creation of projectComment table is successfull`);
    });
}

// comment for task table creation 

const  createQueryForTaskCommentTable = `CREATE TABLE IF NOT EXISTS task_comment(
                                            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                                            content TEXT NOT NULL,
                                            posted_at TEXT NOT NULL,
                                            task_id INTEGER NOT NULL,
                                            FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE
                                            )`;

function  createTaskCommentTable() {
    db.run(createQueryForTaskCommentTable, [], (err) => {
        if(err){
            console.log(`Creation of projectComment table is unsuccessfull ${err.message}`);
            return;
        }
        console.log(`Creation of projectComment table is successfull`);
    });
}

export {
    createUserTable,
    createProjectTable,
    createTaskTable,
    createProjectCommentTable,
    createTaskCommentTable
}