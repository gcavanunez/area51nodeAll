// Declaraciones
import express = require("express")
import { Application, Request, Response, NextFunction } from 'express'

// Settings
const app: Application = express()

// Middlewares
app.use("/", (req: Request, res: Response, next: NextFunction) => {
	const autorizado = req.query.autorizado || ''

	if (autorizado != "si") {
		return res
			.status(401)
			.type("text/plain; charset='utf8'")
			.send("No está autorizado")
	}

	return next()
})

// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/plain")
		.send("¡Eureka!")
})

// Inicio del servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000")
})