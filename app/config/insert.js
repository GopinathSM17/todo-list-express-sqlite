import { db } from "./db.config.js";
async function insertProjectDataByTransaction() {
    db.serialize(()=>{

        db.run('PRAGMA synchronous = OFF');

        db.run('PRAGMA cache_size = 1000000');

        db.run('BEGIN TRANSACTION');

        console.log('Inserting into projects');
        const query = db.prepare(`INSERT INTO project (name, color, is_favourite, user_id)
                                    VALUES (?, ? ,?, ?)`);
        
        for (let i = 1; i < 1000000; i++) {
            query.run(
                `Project ${i}`, 
                `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                Math.random() > 0.5 ? 1 : 0,
                1 
            );
            if(i % 5000 == 0){
                console.log(`${i} projects inserted...`);
            }
        }
        query.finalize();

        db.run('COMMIT');
        db.run('PRAGMA synchronous = FULL');

        console.log('Projects inserted.');

    });
}

async function insertTaskDataByTransaction() {
    db.serialize(()=>{

        db.run('PRAGMA synchronous = OFF');

        db.run('PRAGMA cache_size = 10000000');

        db.run('BEGIN TRANSACTION');

        console.log('Inserting into tasks');
        const query = db.prepare(`INSERT INTO task (content, description, due_date, is_completed, project_id)
                                    VALUES (?, ? ,?, ?, ?)`);
        
        for (let i = 1; i < 10000000; i++) {
            query.run(
                `task ${i}`, 
                `Detail description about the ${i} task`,
                `2025-04-01`,
                Math.random() > 0.5 ? 1 : 0,
                1 
            );
            if(i % 5000 == 0){
                console.log(`${i} task inserted...`);
            }
        }
        query.finalize();

        db.run('COMMIT');
        db.run('PRAGMA synchronous = FULL');

        console.log('all tasks inserted.');

    });
}






export {
    insertProjectDataByTransaction,
    insertTaskDataByTransaction
}