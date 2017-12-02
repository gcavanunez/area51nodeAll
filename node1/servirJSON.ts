import * as http from "http"


const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) =>{
    const users = [
        {nombre: "Sergio", rol: "admin"},
        {nombre: "Jana", rol: "operador"}
    ]

    res.writeHead(200,{"context-type": "application/json"})
    res.end(JSON.stringify(users))
})

servidor.listen(5000, ()=>{
    console.log("Sevidor ejecutandose en el puerto 5000")
})