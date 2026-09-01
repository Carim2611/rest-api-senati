import { Router } from 'express'
import { getEmpresas, getEmpresa, createEmpresas, updateEmpresas, deleteEmpresas } from '../controllers/empresas.controllers.js'

const router = Router()

router.get('/empresas', getEmpresas)

router.get('/empresas/:id', getEmpresa)

router.post('/empresas', createEmpresas)

router.patch('/empresas/:id', updateEmpresas)

router.delete('/empresas/:id', deleteEmpresas)

export default router