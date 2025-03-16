import express from "express";

const router = express.Router();

import { 
    getAlltasks,
    getTaskById,
    insertTask,
    updateTask,
    deleteTaskById,
    getAllProjects,
    getProjectById,
    insertProject,
    updateProject,
    deleteProjectById,
    getAllUsers,
    getUserById,
    insertUser,
    updateUser,
    deleteUser
 } from "../controller/todoList.controller.js";

 //router.get('/', getAllUsers);


 // Tasks CRUD

 router.get('/tasks', getAlltasks)

 router.get('/tasks/:id', getTaskById);

 router.post('/tasks', insertTask);

 router.put('/tasks', updateTask );

 router.delete('/tasks/:id', deleteTaskById);

 // Projects CRUD 

 router.get('/projects/', getAllProjects);

 router.get('/projects/:id', getProjectById);

 router.post('/projects', insertProject);

 router.put('/projects', updateProject);

 router.delete('/projects/:id', deleteProjectById);

 // Users CRUD

 router.get('/users', getAllUsers)

 router.get('/users/:id', getUserById);

 router.post('/users', insertUser);

 router.put('/users', updateUser);

 router.delete('/users/:id', deleteUser);

 // Comments CRUD 

 router.get('/comments', getAllcomments)

 router.get('/comments/:id', getCommentById);

 router.post('/comments', insertComment);

 router.put('/comments', updateComment);

 router.delete('/comments/:id', deleteComment);



export {
    router
}