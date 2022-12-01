import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import { errorHandling } from './utils/error.js'
import alunoRoutes from './routes/alunoRoutes.js'
import exercicioRoutes from './routes/exercicioRoutes.js'
import instrutorRoutes from './routes/instrutorRoutes.js'
import grupoMuscularRoutes from './routes/grupoMuscularRoutes.js'
import tipoExercicioRoutes from './routes/tipoExercicioRoutes.js'
import fichaRoutes from './routes/fichaRoutes.js'

//constroi o pipeline
const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/alunos', alunoRoutes)
app.use('/api/exercicios', exercicioRoutes)
app.use('/api/instrutores', instrutorRoutes)
app.use('/api/gruposmusculares', grupoMuscularRoutes)
app.use('/api/tiposexercicios', tipoExercicioRoutes)
app.use('/api/fichas', fichaRoutes)

app.use(errorHandling)

app.listen(PORT, () => {
  connectDatabase()
  console.log(`Servidor rodando na porta ${PORT}`)
})
