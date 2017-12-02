import express = require("express")
import {Application, Request, Response, NextFunction} from 'express'

const app: Application = express()

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/plain")
		.send("Todo ok")
})

app.get("/usuario/:id/:nombre", (req: Request, res: Response, next: NextFunction) => {
	// params para leer parámetros incluidos en la url
	const id = req.params.id
	const nombre = req.params.nombre
	// query para leer parámetros includos en el querystring
	const autorizado = req.query.autorizado || ''
	const rol = req.query.rol || ''

	res
		.status(200)
		.type("text/plain")
		.send(`
				ID = ${id} 
				Nombre = ${nombre} 
				Autorizado = ${autorizado} 
				Rol = ${rol}`)
})

app.listen(4000, ()=>{
	console.log("Ejecutando el servidor en el puerto 4000")
})