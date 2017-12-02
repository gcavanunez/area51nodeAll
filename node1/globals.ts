

console.log("Start de proces principal")

setTimeout(()=>{
    console.log("setTimeout executed")//antes de tick
})

setImmediate(()=>{
    console.log("setImmediate executed")//last
})

process.nextTick(()=>{
    console.log("nextTick executed")//despues de consoles de root
})

console.log("Fin de proces principal")


console.log(__dirname)
console.log(__filename)

