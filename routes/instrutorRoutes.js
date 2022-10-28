import express from 'express'
import {
  createInstrutor,
  deleteInstrutor,
  getInstrutor,
  getInstrutores,
  updateInstrutor
} from '../controllers/instrutorController.js'

const router = express.Router()

router.get('/', getInstrutores)
router.get('/:id', getInstrutor)
router.post('/', createInstrutor)
router.put('/:id', updateInstrutor)
router.delete('/:id', deleteInstrutor)

export default router