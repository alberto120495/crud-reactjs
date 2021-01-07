import express from 'express'
import morgan from "morgan"
import cors from 'cors'
import config from "./config"

import videoRoutes from './routes/videos.routes'


const app = express();
app.set("port", config.PORT)

app.use(morgan('dev')); //ver que sucede en consola
app.use(cors()); //Comunicacion entre servidores
app.use(express.json());
app.use(express.urlencoded({extended:false})) //Entender peticion post

app.use(videoRoutes);

export default app;
