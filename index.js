import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import alunoRoutes from './routes/alunoRoutes.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/alunos', alunoRoutes)

app.listen(PORT, () => {
  connectDatabase()
  console.log(`Servidor rodando na porta ${PORT}`)
})
