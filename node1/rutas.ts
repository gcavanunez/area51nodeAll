import * as http from "http"
import fs = require("fs")
// const servidor = http.createServer()

// servidor.listen()

http
    .createServer((req: http.IncomingMessage, res: http.ServerResponse)=>{
        console.log(req.url)
        
        const ruta = req.url.toLowerCase()
           
        if(ruta === "/"){
            const readStream = fs.createReadStream("./home.html","utf8")

            res.writeHead(200, {"content-type":"text/html"})
            readStream.pipe(res)
        }else if(ruta === "/pdf"){
            const readStream = fs.createReadStream("./read.pdf")
            
                res.writeHead(200,{"context-type": "application/pdf"})
                readStream.pipe(res)

        } else if (ruta === "/usuarios/lista"){
            const users = [
                {nombre: "Sergio", apellido: "Hidalgo"},
                {nombre: "Carmen", apellido: "SanDiego"}
            ]
            
            res.writeHead(200,{"context-type": "application/pdf"})
            res.end(JSON.stringify(users))
        }else {
            res.writeHead(404, {"content-type": "text/plain; charset=utf8"})
            res.end("pagina no encontrada")

        }


    })
    .listen(5000, ()=>{
        console.log("Servidor corriendo en puerto 5000")
    })