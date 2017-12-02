export class myClass{
    obtenerDate(){
        return new Date()
    }
}

export const contador = arr => arr.length

export const thisYear = 2017

export module humanResources {
    export class Personal{
        obtainCap(){
            return "obtain cap"
        }
    }
}

class Matricula {
    listaAlumnos(){
        return "Listado de Alumnos"
    }
}

const matricula = new Matricula()

const nameInstitution: string = "Area51"

export { matricula, nameInstitution }
