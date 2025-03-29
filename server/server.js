import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import { createUser, authUser, increaseSillasStock, increaseMesasStock, increaseMantelesStock, increaseCubreMantelesStock } from './database.js';
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
app.post("/login", async (req, res) => {
  const {nombre, passwd} = req.body;
  const encryptedPasswd = CryptoJS.SHA256(passwd).toString();
  const user = await authUser(nombre, encryptedPasswd);
  if(user){
    res.status(201).send(user);
    console.log(`Usuario ${user.NOMBREUSR} autenticado`);
    if(user.ADMINUSR === '1'){
      console.log("Permisos de administrador concedidos");
    }
  }else{
    res.status(401).json({message: "Usuario o contraseña incorrectos"});
    console.log("Acceso negado");
  }
});

// Inserción de inventario

app.post("/inventario", async (req, res) => {
  // const {mesa, silla, mantel, cubreMantel} = req.body;
  console.log("Entra a server.js")
  const {inv} = req.body;
  try{
    for(const objeto of inv){
        if(objeto.tipo === 'mesa'){
          const {mesas, stock} = objeto;
          await increaseMesasStock(mesas, stock);

        }
        else if(objeto.tipo === 'silla'){
          const { sillas, stock } = objeto;
          await increaseSillasStock(sillas, stock);

        }
        else if(objeto.tipo === 'mantel'){
          const { manteles, stock, colorManteles } = objeto;
          await increaseMantelesStock(manteles, stock, colorManteles);

        }
        else if(objeto.tipo === 'cubreMantel'){
          const { cubreManteles, stock, colorCubreManteles } = objeto;
          await increaseCubreMantelesStock(cubreManteles, stock, colorCubreManteles);

        }
        else{ console.log("No se ha podido procesar el objeto" + objeto.tipo); }
      
    }
    res.status(200).send("Inventario actualizado");
  } catch (err) { res.status(400).send("Error al procesar la información"); }
});