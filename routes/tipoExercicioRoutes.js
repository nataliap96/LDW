import express from 'express'
import {
  createTipoExercicio,
  deleteTipoExercicio,
  getTipoExercicio,
  getTiposExercicios,
  updateTipoExercicio
} from '../controllers/tipoExercicioController.js'

const router = express.Router()

router.get('/', getTiposExercicios)
router.get('/:id', getTipoExercicio)
router.post('/', createTipoExercicio)
router.put('/:id', updateTipoExercicio)
router.delete('/:id', deleteTipoExercicio)

export default router