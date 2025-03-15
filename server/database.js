import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

export async function getUserById(id){
    const [rows] = await pool.query(`
            SELECT *
            FROM USUARIOS
            WHERE IDUSR = ?
            `, [id]);
    return rows;
}

// Register
export async function createUser(nombre, passwd) {
    const [result] = await pool.query(`
        INSERT INTO USUARIOS (NOMBREUSR, PASSWDUSR)
        VALUES (?, ?)
        `, [nombre, passwd]);
        const id = result.insertId;
    return getUserById(id);
}

//Login
export async function authUser(nombre, passwd) {
    const [rows] = await pool.query(`
        SELECT NOMBREUSR
        FROM USUARIOS 
        WHERE NOMBREUSR = '${nombre}'
        AND PASSWDUSR = '${passwd}'
    `);
    return rows[0];
}