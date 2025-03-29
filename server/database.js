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
        SELECT NOMBREUSR, ADMINUSR
        FROM USUARIOS 
        WHERE NOMBREUSR = '${nombre}'
        AND PASSWDUSR = '${passwd}'
    `);
    return rows[0];
}

// Inventario
export async function increaseMesasStock(mesa, stock) {
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET STOCK = STOCK + ?
        WHERE TIPO = ?
    `, [stock, mesa]);
    return rows;
}
export async function increaseSillasStock(silla, stock) {
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET STOCK = STOCK + ?
        WHERE TIPO = ?
    `, [stock, silla]);
    return rows;
}
export async function increaseMantelesStock(mantel, stock, colorMantel) {
    console.log("Entra a increaseMantelesStock");
    console.log(mantel, stock, colorMantel);
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET STOCK = STOCK + ?
        WHERE TIPO = 'manteles'
        AND TEXTURA = ?
        AND COLOR = ?
    `, [stock, mantel, colorMantel]);
    return rows;
}
export async function increaseCubreMantelesStock(cubreMantel, stock, colorCubreMantel) {
    console.log("Entra a increaseCubreMantelesStock");
    console.log(cubreMantel, stock, colorCubreMantel);
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET STOCK = STOCK + ?
        WHERE TIPO = 'cubre-manteles'
        AND TEXTURA = ?
        AND COLOR = ?    
    `,[stock, cubreMantel, colorCubreMantel]);
    return rows;
}
// Prices
export async function updateMesasPrice(mesaType, newPrice) {
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET PRECIOUNITARIO = ?
        WHERE TIPO = ?
    `, [newPrice, mesaType]);
    return rows;
}
export async function updateSillasPrice(sillaType, newPrice) {
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET PRECIOUNITARIO = ?
        WHERE TIPO = ?
    `, [newPrice, sillaType]);
    return rows;
}
export async function updateMantelesPrice(mantelType, newPrice, mantelColor) {
    const [rows] = await pool.query(`
        UPDATE PRODUCTOS
        SET PRECIOUNITARIO = ?
        WHERE TIPO = ?
        AND COLOR = ?
    `, [newPrice, mantelType, mantelColor]);
    return rows;
}


