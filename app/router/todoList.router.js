import express from "express";

const router = express.Router();

import { 
    getAllTasks,
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
    deleteUserById,
    getAllProjectComments,
    getProjectCommentById,
    insertProjectComment,
    updateProjectComment,
    deleteProjectComment,
    getAllTaskComments,
    getTaskCommentById,
    insertTaskComment,
    updateTaskComment,
    deleteTaskComment
 } from "../controller/todoList.controller.js";

 //router.get('/', getAllUsers);


 //-------- Tasks CRUD ----------

 router.get('/tasks', getAllTasks)

 router.get('/tasks/:id', getTaskById);

 router.post('/tasks', insertTask);

 router.put('/tasks/:id', updateTask);

 router.delete('/tasks/:id', deleteTaskById);

 //--------------- Projects CRUD ------------

 router.get('/projects/', getAllProjects);

 router.get('/projects/:id', getProjectById);

 router.post('/projects', insertProject);

 router.put('/projects/:id', updateProject);

 router.delete('/projects/:id', deleteProjectById);

//  // Users CRUD

 router.get('/users', getAllUsers)

 router.get('/users/:id', getUserById);

 router.post('/users', insertUser);

 router.put('/users', updateUser);

 router.delete('/users/:id', deleteUserById);

 // Project Comments CRUD 

 router.get('/projectcomments', getAllProjectComments)

 router.get('/projectcomments/:id', getProjectCommentById);

 router.post('/projectcomments', insertProjectComment);

 router.put('/projectcomments', updateProjectComment);

 router.delete('/projectcomments/:id', deleteProjectComment);

 // Task Comments CRUD
 
 router.get('/taskcomments', getAllTaskComments)

 router.get('/taskcomments/:id', getTaskCommentById);

 router.post('/taskcomments', insertTaskComment);

 router.put('/taskcomments', updateTaskComment);

 router.delete('/taskcomments/:id', deleteTaskComment);


export {
    router
}