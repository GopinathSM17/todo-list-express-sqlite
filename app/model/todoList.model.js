import { db } from "../config/db.config.js";

const getAllUsersInDB = (cb) => {
    db.all(`SELECT * FROM user`,
        [],
        (err, data) => {
            cb(err, data);
        });
};

export {
    getAllUsersInDB
}