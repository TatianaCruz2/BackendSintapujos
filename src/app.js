//IMPORTAMOS EXPRESS
import express from "express";

//Importamos Morgan desde express
import morgan from "morgan";

//Importamos Rutas
// import aprendizRouter from './routes/aprendizRouter.js'

const app = express();
//Middlewares, esto para que el servidor interprete los datos en formato json
app.use(morgan('dev'));
app.use(express.json());
//Usamos la ruta aprendiz
// app.use('/api', aprendizRouter);
export default app;