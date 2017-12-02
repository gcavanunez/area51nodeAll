// Declaraciones
import express = require("express")
import { Application, Request, Response, NextFunction } from 'express'
import bodyParser = require("body-parser")
import methodOverride = require("method-override")
import * as morgan from "morgan"
import * as mongoose from "mongoose"
import {conexionMongo} from "./config/conexiones"
//import Usuario from "./api/models/usuarios"
import {router as rutaUsuario} from "./rutas/usuario"

// Settings
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./views")

mongoose.connect(conexionMongo, {
	useMongoClient: true
})

// Middlewares
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"))

app.use("/usuario", rutaUsuario)

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction)=>{
	res
        .status(200)
        .type("text/plain")
        .send("Home")
        
})


// app.get("/usuario/registro", (req: Request, res: Response, next: NextFunction)=>{
// 	res
// 		.render("usuarioFormulario", {

//         })
// })

// app.post("/usuario", (req: Request, res: Response, next: NextFunction)=>{
//     const nombre = req.body.nombre
//     const apellido = req.body.apellido

//     const usuario = new Usuario()
//     usuario["nombre"] = nombre
//     usuario["apellido"] = apellido

//     usuario.save((error, registro)=> {
//         if(error){
//             return res
//                 .status(500)
//                 .type("text/plain")
//                 .send(error)
//         }
//         res.redirect("/usuario")
//     })

// })

// app.get("/usuario", (req: Request, res: Response, next: NextFunction)=>{
//     Usuario
//         .find({})
//         .then(registros=>{
//             res.json(registros)
//         })
//         .catch(error=>{
//             res
//                 .status(500)
//                 .type("text/plain")
//                 .send(error)
//         })
// })

// Inicio del servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000")
})