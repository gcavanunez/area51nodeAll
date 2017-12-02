import express = require("express")
import { Application, Request, Response, NextFunction} from "express"

const app: Application = express()

app

    .get("/", (req: Request, res:Response, next: NextFunction)=>{
        res
            .status(200)
            .type("text/html")
            .sendFile(`${__dirname}/home.html`)
        // res.status(200)
        // res.type("text/html")
        // res.sendFile("./home.html")
    })
    .get("/pdf", (req: Request, res:Response, next: NextFunction)=>{
        res
            .status(200)
            .type("application/pdf")
            .sendFile(`${__dirname}/read.pdf`)
    })

app.listen(5000, ()=> console.log("Servidor Express corriendo en puerto 5000"))