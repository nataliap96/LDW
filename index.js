import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import cookieParser from 'cookie-parser'
import { errorHandling } from './utils/error.js'

import alunoRoutes from './routes/alunoRoutes.js'
import instrutorRoutes from './routes/instrutorRoutes.js'
import grupoMuscularRoutes from './routes/grupoMuscularRoutes.js'
import tipoExercicioRoutes from './routes/tipoExercicioRoutes.js'
import authRoutes from './routes/authRoutes.js'
import fichaRoutes from './routes/fichaRoutes.js'
import { verificarToken } from './utils/verificarToken.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/auth', authRoutes)
app.use('/api/alunos', alunoRoutes)
app.use('/api/instrutores', verificarToken, instrutorRoutes)
app.use('/api/gruposmusculares', verificarToken, grupoMuscularRoutes)
app.use('/api/tiposexercicios', verificarToken, tipoExercicioRoutes)
app.use('/api/fichas', verificarToken, fichaRoutes)

app.use(errorHandling)

app.listen(PORT, () => {
  connectDatabase()
  console.log(`Servidor rodando na porta ${PORT}`)
})
