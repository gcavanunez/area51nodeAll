import { myClass, contador, thisYear, humanResources} from "./util"

const myclass = new myClass()
console.log(myclass.obtenerDate())

const users = ["Segio", "Ale", "Javier"]
console.log(contador(users))

console.log(thisYear)

////Forma 2 

import * as elementos from "./util"

console.log(elementos.thisYear)
//// forma 3

import elements = require("./util")
console.log(elements.thisYear)

const personal = new humanResources.Personal()
console.log(personal.obtainCap())


//// forma4 
import "./utilarray"

console.log(users["mensaje"]())