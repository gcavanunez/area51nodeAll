// Declaraciones
import express = require("express")
import { Application, Request, Response, NextFunction } from 'express'

// Settings
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(express.static("public"))


// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.render("home", {
			titulo: req.query.titulo
		})
})

// Inicio del servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000")
})