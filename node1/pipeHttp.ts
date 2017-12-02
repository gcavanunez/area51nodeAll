import * as http from "http"
import * as fs from "fs"

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) =>{
    const readStream = fs.createReadStream("./archivoStream.txt", "utf8")

    res.writeHead(200,{"context-type": "text/plain"})
    readStream.pipe(res)
})

servidor.listen(5000, ()=>{
    console.log("Sevidor ejecutandose en el puerto 5000")
})