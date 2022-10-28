import express from 'express'
import {
  createAluno,
  deleteAluno,
  getAluno,
  getAlunos,
  updateAluno
} from '../controllers/alunoController.js'

const router = express.Router()

router.get('/', getAlunos)
router.get('/:id', getAluno)
router.post('/', createAluno)
router.put('/:id', updateAluno)
router.delete('/:id', deleteAluno)

export default router