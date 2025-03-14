import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import { createUser } from './database.js';


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
