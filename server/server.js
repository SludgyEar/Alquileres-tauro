import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import { createUser, authUser } from './database.js';
import CryptoJS from 'crypto-js';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
// Creación de usuario
app.post("/register", async (req, res) => {
  const {nombre, passwd} = req.body
  const createdUser = await createUser(nombre, passwd);
  res.status(201).send(createdUser);
});
//Login de un usuario -> Tiene que pasar la contraseña encriptada con sha256 para compararlas
app.get("/login", async (req, res) => {
  const {nombre, passwd} = req.body;
  const encryptedPasswd = CryptoJS.SHA256(passwd).toString();
  const user = await authUser(nombre, encryptedPasswd);
  res.status(200).send(user);
});
