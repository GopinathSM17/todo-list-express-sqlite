import { sqlite3 } from "sqlite3";

const sql = sqlite3.verbose();

const db = new sql.Database('./tutorial.db', connected);

const connected = (err)=> {
    if(err){
        console.log("Database creation failed :", err.message);
        return ;
    }
    console.log("Database is successfully created");
    
}
