// Declaraciones
import express = require("express")
import { Application, Request, Response, NextFunction } from 'express'

// Settings
const app: Application = express()

// Middlewares

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction)=>{
    
})

// Inicio del servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000")
})