import { db } from "../config/db.config.js";


//---------- Task DB operations--------------
const getAllTasksInDB = (cb) => {
    db.all(`SELECT * FROM task`, [], (err, data) => {
        cb(err, data);
    });
};

const insertTaskInDB = (({ content, description, due_date, is_completed, project_id }, cb) => {
    db.run(`INSERT INTO task (content, description, due_date, is_completed, project_id)
            VALUES(?, ?, ?, ?, ?)`,
        [content, description, due_date, is_completed, project_id],
        (err) => {
            cb(err);
        }
    );
});

const getTaskByIdInDB = (id, cb) => {
    db.all(`SELECT * FROM task WHERE id = ?`, [id], (err, data) => {
        cb(err, data);
    });
};

const updateTaskInDB = ({ content, description, due_date, is_completed, project_id }, id, cb) => {
    db.run(`UPDATE task 
                SET content = ?,
                    description = ?,
                    due_date = ?,
                    is_completed = ?,
                    project_id = ?
                WHERE id = ? `,
        [content, description, due_date, is_completed, project_id, id],
        (err, data) => {
            cb(err, data);
        }
    );
};

const deleteTaskByIdInDB = (id, cb) => {
    db.run(`DELETE FROM task WHERE id = ?`, [id], (err) => {
        cb(err);
    });
};

//---------- Project DB operations--------------

const getAllProjectsInDB = (cb) => {
    db.all(`SELECT * FROM project`, [], (err, data) => {
        cb(err, data);
    });
};

const getProjectByIdInDB = (id, cb) => {
    db.all(`SELECT * FROM project WHERE id = ?`,
        [id],
        (err, data) => {
            cb(err, data);
        }
    )
}

const insertProjectInDB = ({ name, color, is_favourite, user_id }, cb) => {
    db.run(`INSERT INTO project (name, color, is_favourite, user_id)
            VALUES(?, ?, ?, ?)`,
        [name, color, is_favourite, user_id],
        (err) => {
            cb(err);
        });
};

const updateProjectInDB = (id, { name, color, due_date, is_favourite, user_id }, cb) => {
    db.run(`UPDATE project 
           name = ?,
           color = ?,
           due_date = ?,
           is_favourite = ?,
           user_id = ?
           WHERE id = ?`,
        [name, color, due_date, is_favourite, user_id, id],
        (err) => {
            cb(err);
        });
}

const deleteProjectByIdInDB = (id, cb) => {
    db.run(`DELETE FROM project WHERE id = ?`, [id], (err) => {
        cb(err);
    });
}

//---------- User DB operations-------------- 

const getAllUsersInDB = (cb) => {
    db.all(`SELECT * FROM user`,
        [],
        (err, data) => {
            cb(err, data);
        });
};

const getUserByIdInDB = (id, cb) => {
    db.all(`SELECT * FROM user WHERE id = ?`, [id], (err, data) => {
        cb(err, data);
    });
};

const insertUserInDB = ({ name, email }, cb) => {
    db.run(`INSERT INTO user (name, email)
            values(?, ?)`,
        [name, email],
        (err) => {
            cb(err);
        });
};

const updateUserInDB = ({ name, email }, id, cb) => {
    db.run(`UPDATE user 
        SET name = ?,
            email = ?
        WHERE id = ? `,
        [name, email, id],
        (err) => {
            cb(err);
        });
};

const deleteUserByIdInDB = (id, cb) => {
    db.run(`DELETE FROM user WHERE id = ?`, [id], (err) => {
        cb(err);
    })
};

//----------Projects comments DB operations--------------

const getAllProjectCommentsInDB = (cb) => {
    db.all(`SELECT * FROM project_comment`, [], (err, data) => {
       cb(err, data);
    });
};

const getProjectCommentByIdInDB = (id, cb) => {
    db.all(`SELECT * FROM project_comment WHERE id = ?`, [id], (err, data) => cb(err, data));
}

const insertProjectCommentInDB = ({ content, project_id }, cb) => {
    db.run(`INSERT INTO project_comment (content , project_id)
        VALUES (?,?)`,
        [content, project_id],
        (err) => {
            cb(err);
        });
}

const updateProjectCommentInDB = (id, { content, project_id }, cb) => {
    db.run(`UPDATE  project_comment
        SET content = ?,
            project_id = ?
        WHERE id = ?`,
        [content, project_id, id],
        (err) => {
            cb(err);
        });
}

const deleteProjectCommentInDB = (id, cb) => {
    db.run(`DELETE FROM task_comment WHERE id = ?`, [id], (err) => cb(err));
};

//----------tasks comments DB operations--------------

const getAllTaskCommentsInDB = (cb) => {
    db.all(`SELECT * FROM task_comment`, [], (err, data) => {
        cb(err, data);
    });
};

const getTaskCommentByIdInDB = (id, cb) => {
    db.all(`SELECT * FROM task_comment WHERE id = ?`, [id], (err, data) => cb(err, data));
}

const insertTaskCommentInDB = ({ content, task_id }, cb) => {
    db.run(`INSERT INTO task_comment (
        content, task_id) VALUES(?, ?)`,
        [content, task_id],
        (err) => {
            cb(err);
        });
}

const updateTaskCommentInDB = (id, { content, task_id }, cb) => {
    db.run(`UPDATE  task_comment
        SET content = ?,
            task_id = ?
        WHERE id = ?`,
        [content, task_id, id],
        (err) => {
            cb(err);
        });
}

const deleteTaskCommentInDB = (id, cb) => {
    db.run(`DELETE FROM task_comment WHERE id = ?`, [id], (err) => cb(err));
};


const makeProjectFavouriteInDB = (id , cb)=>{
    db.run(`UPDATE project SET is_favourite = 1 WHERE id = ?`,[id], (err)=> cb(err));
}




export {
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
    insertProjectCommentInDB,
    getProjectCommentByIdInDB,
    updateProjectCommentInDB,
    deleteProjectCommentInDB,
    getAllTaskCommentsInDB,
    getTaskCommentByIdInDB,
    insertTaskCommentInDB,
    updateTaskCommentInDB,
    deleteTaskCommentInDB,
    makeProjectFavouriteInDB
}