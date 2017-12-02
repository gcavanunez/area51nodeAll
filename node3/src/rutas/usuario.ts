import express = require("express")
import { Application, Request, Response, NextFunction } from 'express'
//import Usuario from "../api/models/usuarios"
import {controlador} from "../api/controladores/usuarioControlador"

const router = express.Router()

router.get("/registro", controlador.registro)

router.post("/", controlador.post)

router.get("/usuario", controlador.usuario)

export {router}