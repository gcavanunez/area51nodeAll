import * as http from "http"
import fs = require("fs")
// const servidor = http.createServer()

// servidor.listen()

const metodosPermitidos = ["get","post", "put", "delete", "options"]

http
    .createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{
        console.log(req.url)
        
        res.writeHead(200, {"content-type": "application/json"})
        return res.end(JSON.stringify(req.headers))

    })
    .listen(5000, ()=>{
        console.log("Servidor corriendo en puerto 5000")
    })