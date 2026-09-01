import { Router } from 'express'
import { getEstudiantes, getEstudiante, createEstudiantes, updateEstudiantes, deleteEstudiantes } from '../controllers/estudiantes.controllers.js'

const router = Router()

router.get('/estudiantes', getEstudiantes)

router.get('/estudiantes/:id', getEstudiante)

router.post('/estudiantes', createEstudiantes)

router.patch('/estudiantes/:id', updateEstudiantes)

router.delete('/estudiantes/:id', deleteEstudiantes)

export default router