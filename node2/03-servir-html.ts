// Declaraciones
import express = require("express")
import { Application, Request, Response, NextFunction } from 'express'

// Settings
const app: Application = express()

// Middlewares
app.use(express.static("public"))
// app.use("/assets", express.static("public"))

/*
app.use("/assets", (req: Request, res: Response, next: NextFunction) => {
	const url = req.url

	res
		.status(200)
		.sendFile(__dirname + "/public" + url)
})
*/

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.sendFile(__dirname + "/home.html")
})

// Inicio del servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000")
})