

console.time("Process")

console.log("Start")

setTimeout(()=>{
    let salida = 0
    let indice 
    
    for(indice=0; indice <= 50e6; indice++) salida++

    console.log("Fin del for")
}, 5000)



console.log("End")
console.timeEnd("Process")