import { 
    getAllUsersInDB
 } from "../model/todoList.model.js";

const getAllUsers = (req,res)=>{
    getAllUsersInDB((err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on user table ${err.message}`});
        }
        res.status(200);
        res.json(data);
    });
}

const getTaskById = (req,res)=>{
    let id = req.body;
    getTaskByIdInDB(id, (err, data)=>{
        if(err){
            res.status(500);
            res.json({message : `unsuccessfull read on user table ${err.message}`});
        }
        res.status(200);
        res.json(data);
    });
}

export {
    getAllUsers,
    getTaskById
}
