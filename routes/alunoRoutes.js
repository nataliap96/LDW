import express from 'express'
import {
  createAluno,
  deleteAluno,
  getAluno,
  getAlunos,
  updateAluno
} from '../controllers/alunoController.js'
import { verificarToken, verificarUsuario } from '../utils/verificarToken.js'

const router = express.Router()

router.get('/', verificarToken, getAlunos)
router.get('/:id', verificarUsuario, getAluno)
router.post('/', verificarToken, createAluno)
router.put('/:id', verificarUsuario, updateAluno)
router.delete('/:id', verificarUsuario, deleteAluno)

export default router