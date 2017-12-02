import express = require("express")
import { Application, Request, Response, NextFunction} from "express"

const app: Application = express()

const usuarios = [
    {nombre: "Sergio", area: 1},
    {nombre: "Carlos", area: 2},
    {nombre: "Pancho", area: 1},
    {nombre: "Jana", area: 2},
    {nombre: "Tony", area: 1},
    {nombre: "Fernando", area: 1},
    {nombre: "Claudia", area: 3},
]

app

    .get("/", (req: Request, res:Response, next: NextFunction)=>{
        res
            .status(200)
            .type("text/html")
            .sendFile(`${__dirname}/home.html`)
    })
    .get("/usuarios/:area", (req: Request, res:Response, next: NextFunction)=>{
        const area = +req.params.area

        const personas = usuarios.filter(usuario => usuario.area === area)

        res
        .status(200)
        .type("application/JSON")
        .json(personas)
    })

app.listen(5000, ()=> console.log("Servidor Express corriendo en puerto 5000"))