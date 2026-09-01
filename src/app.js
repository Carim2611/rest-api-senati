import express from 'express'
import estudianteRoutes from './routes/estudiantes.routes.js'
import profesorRoutes from './routes/profesores.routes.js'
import empresaRoutes from './routes/empresas.routes.js'

const app = express()

app.use(express.json())

app.use('/api', estudianteRoutes)
app.use('/api', profesorRoutes)
app.use('/api', empresaRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;