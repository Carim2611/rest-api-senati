import { Router } from 'express'
import { getProfesores, getProfesor, createProfesores, updateProfesores, deleteProfesores } from '../controllers/profesores.controllers.js'

const router = Router()

router.get('/profesores', getProfesores)

router.get('/profesores/:id', getProfesor)

router.post('/profesores', createProfesores)

router.patch('/profesores/:id', updateProfesores)

router.delete('/profesores/:id', deleteProfesores)

export default router