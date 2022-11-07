import mysql from 'mysql2';
import { DBHOST,DBUSER,DBNAME,DBPASSWORD } from './constant.js';


export function DbConnection(){

    const db = mysql.createConnection({
        host:DBHOST,
        user:DBUSER,
        database:DBNAME,
        password:DBPASSWORD
    })

    return db;
} 

export default DbConnection();


