import express from 'express'
import {
  createGrupoMuscular,
  deleteGrupoMuscular,
  getGrupoMuscular,
  getGruposMusculares,
  updateGrupoMuscular
} from '../controllers/grupoMuscularController.js'

const router = express.Router()

router.get('/', getGruposMusculares)
router.get('/:id', getGrupoMuscular)
router.post('/', createGrupoMuscular)
router.put('/:id', updateGrupoMuscular)
router.delete('/:id', deleteGrupoMuscular)

export default router