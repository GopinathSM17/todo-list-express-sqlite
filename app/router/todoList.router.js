import express from "express";

const router = express.Router();

import { 
    getAllUsers
 } from "../controller/todoList.controller.js";

 router.get('/', getAllUsers);

export {
    router
}