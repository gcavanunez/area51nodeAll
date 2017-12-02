import { Application, Request, Response, NextFunction } from 'express'
import Usuario from "../../api/models/usuarios"
const controlador = {
    registro:  (req: Request, res: Response, next: NextFunction)=>{
        res
            .render("usuarioFormulario", {
    
            })
    },
    post: (req: Request, res: Response, next: NextFunction)=>{
        const nombre = req.body.nombre
        const apellido = req.body.apellido
    
        const usuario = new Usuario()
        usuario["nombre"] = nombre
        usuario["apellido"] = apellido
    
        usuario.save((error, registro)=> {
            if(error){
                return res
                    .status(500)
                    .type("text/plain")
                    .send(error)
            }
            res.redirect("/")
        })
    
    },
    usuario: (req: Request, res: Response, next: NextFunction)=>{
        Usuario
            .find({})
            .then(registros=>{
                res.json(registros)
            })
            .catch(error=>{
                res
                    .status(500)
                    .type("text/plain")
                    .send(error)
            })
    }
}

export {controlador}