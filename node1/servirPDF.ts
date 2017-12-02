import * as http from "http"
import * as fs from "fs"

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) =>{
    const readStream = fs.createReadStream("./read.pdf")

    res.writeHead(200,{"context-type": "application/pdf"})
    readStream.pipe(res)
})

servidor.listen(5000, ()=>{
    console.log("Sevidor ejecutandose en el puerto 5000")
})