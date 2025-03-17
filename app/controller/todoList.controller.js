import { 
    getAllTasksInDB,
    insertTaskInDB,
    getTaskByIdInDB,
    updateTaskInDB,
    deleteTaskByIdInDB,
    getAllProjectsInDB,
    insertProjectInDB,
    getProjectByIdInDB,
    updateProjectInDB,
    deleteProjectByIdInDB,
    getAllUsersInDB,
    insertUserInDB,
    getUserByIdInDB,
    updateUserInDB,
    deleteUserByIdInDB,
    getAllProjectCommentsInDB,
    getProjectCommentByIdInDB,
    insertProjectCommentInDB,
    updateProjectCommentInDB,
    deleteProjectCommentInDB,
    getAllTaskCommentsInDB,
    getTaskCommentByIdInDB,
    insertTaskCommentInDB,
    updateTaskCommentInDB,
    deleteTaskCommentInDB
 } from "../model/todoList.model.js";

// ---- Task table CRUD Operations ----------
// getAllTasks
const getAllTasks=(req,res)=>{
    getAllTasksInDB((err,data)=>{
        if(err){
            res.status(500);
            res.json({message : `Unable to get all the task in task table ${err.message}`})
            return;
        }
        res.status(200);
        res.json(data);
    });
}

// insertTask
const insertTask = (req,res)=>{
    let input = req.body;
    insertTaskInDB(input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `Unable to insert in task table ${message}`})
            return;
        }
        res.status(200);
        res.json({message : `Successfull insertion of data in task table`});
    });
}

// getTaskById
const getTaskById = (req,res)=>{
    let id = Number(req.params.id);
    getTaskByIdInDB(id, (err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `Unable to get task by ID in task table ${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    });
}

// updateTask
const updateTask = (req, res)=>{
    let input = req.body;
    let id = Number(req.params.id);
    updateTaskInDB(input, id, (err, data)=>{
        if(err){
            res.status(500);
            res.json({
                message : `Unable to update the task : ${id} and err is ${err.message}`
            });
            return;
        }
        res.status(200);
        res.json({message : `update on the taskid ${id} is successfull`});
    });
}

// deleteTask
const deleteTaskById = (req,res)=>{
    let id = req.params.id;
    deleteTaskByIdInDB(id, (err)=>{
        if(err){
            res.status(500);
            res.json({
                message : `Unsucessfull deletion on user table id is ${id}`
            });
            return;
        }
        res.status(200);
            res.json({
                message : `Sucessfull deletion on user table id is ${id}`
            });
    });
}

// // ------- Projects table CRUD Operations ----------

//get All Projects
const getAllProjects = (req,res)=>{
    getAllProjectsInDB((err, data)=>{
        if(err){
            res.status(500);
            res.json({
                message : `Unable to get all the project in project table ${err.message}`
            });
            return;
        }
        res.status(200);
        res.json(data);
    })
}

// getProjectById
const getProjectById = (req,res)=>{
    let id = req.params.id;
    getProjectByIdInDB(id, (err,data)=>{
        if(err){
            res.status(500);
            res.json({
                message : `Unable to get the project id: ${id} from project table ${err.message}`
            });
            return;
        }
        res.status(200);
        res.json(data);
    })
}

//insertProject
const insertProject = (req, res)=>{
    let input = req.body;
    insertProjectInDB(input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to insert data in Project table${err.message}`})
            return;
        }
        res.status(200);
        res.json({
            message : `successfull insertion of the data in the project table`
        });
    });
}

//updateProject
const updateProject = (req,res)=>{
    let id = req.params.id;
    let input = req.body;
    updateProjectInDB(id , input , (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to upate the on id: ${id} error is ${err.message}`})
            return;
        }
        res.status(200);
        res.json({message : `Update completed on id: ${id}`});
    })
}

//deleteProjectById
const deleteProjectById = (req,res)=>{
    let id = req.params.id;
    deleteProjectByIdInDB(id, (err)=>{
        if(err){
            res.status(500);
            res.json({
                message : `Deletion is unsuccesfull on ProjectTable id ${id} and error is ${err.message}`
            });
            return;
        }
        res.status(200);
        res.json({message : `Deletion is succesfull on ProjectTable id is ${id}`})
    });
}

// ------------ Users Table CRUD Operations ----------------

// getAllUsers
const getAllUsers = (req,res)=>{
    getAllUsersInDB((err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on user table ${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    });
}

// getUserById
const getUserById = (req,res)=>{
    let id = req.params.id;
    getUserByIdInDB(id, (err,data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on user table id is ${id} and error is  ${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    });
}

// insertUser

const insertUser= (req,res)=>{
    let input = req.body;
    insertUserInDB(input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to insert data in User table ${err.message}`})
            return;
        }
        res.status(200);
        res.json({
            message : `successfull insertion of the data in the User table`
        });
    })
}

// updateUser
const updateUser = (req,res)=>{
    let input = req.body;
    let id = req.params.id;
    updateUserInDB(input,id, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to update data in UserTable ${err.message}`})
            return;
        }
        res.status(200);
        res.json({
            message : `Updation of the User table is successfull on the id ${id} `
        });
    })
}

//deleteUserById
const deleteUserById = (req,res)=>{
    let id = req.params.id;
    deleteUserByIdInDB(id, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to delete data in UserTable ${err.message}`})
            return;
        }
        res.status(200);
        res.json({
            message : `Deletion of the User table is successfull on the id ${id} `
        });
    })
}

// --------------- Project comments table CRUD operations ------------------

//getAllProjectComments
const getAllProjectComments = (req, res)=>{
    getAllProjectCommentsInDB((err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on Project Comments table ${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    });
}

//getProjectCommentById
const getProjectCommentById =(req, res)=>{
    let id = req.params.id;
    getProjectCommentByIdInDB(id, (err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on Project Comments table with id ${id} and error${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    })
}

//insertProjectComment
const insertProjectComment = (req, res)=>{
    let input = req.body;
    insertProjectCommentInDB(input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to insert data in Project Comments table ${err.message}`})        
        }
        res.status(200);
        res.json({message : `successfull insertion of the data in the Project Comments table`})
    });
}

//updateProjectComment
const updateProjectComment = (req,res)=>{
    let id = req.params.id;
    let input = req.body;
    updateProjectCommentInDB(id, input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to update data in Project Comments table ${err.message}`})        
        }
        res.status(200);
        res.json({message : `successfull updation of the data in the Project Comments table`})
    });
}

// deleteProjectComment
const deleteProjectComment = (req, res)=>{
    let id = req.params.id;
    deleteProjectCommentInDB(id , (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to delete data in Project Comments table ${err.message}`})        
        }
        res.status(200);
        res.json({message : `successfull deletion of the data in the Project Comments table`})
    });
}


// -------------- task comments table CRUD operations ------------------

//getAllTaskComments
const getAllTaskComments = (req, res)=>{
    getAllTaskCommentsInDB((err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on Task Comments table ${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    });
}

//getTaskCommentById
const getTaskCommentById =(req, res)=>{
    let id = req.params.id;
    getTaskCommentByIdInDB(id, (err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on Task Comments table with id ${id} and error${err.message}`});
            return;
        }
        res.status(200);
        res.json(data);
    })
}

//insertTaskComment
const insertTaskComment = (req, res)=>{
    let id = req.params.id;
    let input = req.body;
    insertTaskCommentInDB(input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to insert data in Task Comments table ${err.message}`})        
        }
        res.status(200);
        res.json({message : `successfull insertion of the data in the Task Comments table`})
    });
}

//updateTaskComment
const updateTaskComment = (req,res)=>{
    let id = req.params.id;
    let input = req.body;
    updateTaskCommentInDB(id, input, (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to update data in Task Comments table ${err.message}`})        
        }
        res.status(200);
        res.json({message : `successfull updation of the data in the Task Comments table`})
    });
}

// deleteTaskComment
const deleteTaskComment = (req, res)=>{
    let id = req.params.id;
    deleteTaskCommentInDB(id , (err)=>{
        if(err){
            res.status(500);
            res.json({message : `unable to delete data in Task Comments table ${err.message}`})        
        }
        res.status(200);
        res.json({message : `successfull deletion of the data in the Task Comments table`})
    });
}




export {
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
}
