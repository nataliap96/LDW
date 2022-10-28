import express from 'express'
import {
  createFicha,
  deleteFicha,
  getFicha,
  getFichas,
  updateFicha
} from '../controllers/fichaController.js'

const router = express.Router()

router.get('/', getFichas)
router.get('/:id', getFicha)
router.post('/', createFicha)
router.put('/:id', updateFicha)
router.delete('/:id', deleteFicha)

export default router