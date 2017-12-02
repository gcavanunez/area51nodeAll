import * as fs from "fs"

const readStream = fs.createReadStream("./archivoStream.txt", "utf8")

const writeStream = fs.createWriteStream("./archivoEscrituraStream.txt", "utf8")

readStream.on("data", chunk => {
    console.log("leyo un chunk")

    console.log(chunk)
    writeStream.write (chunk)
})