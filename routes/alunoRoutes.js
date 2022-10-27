import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Rota de listagem de alunos.')
})
router.get('/:id', (req, res) => {
  res.send('Rota de busca de aluno.')
})
router.post('/', (req, res) => {
  res.send('Rota de cadastro de aluno.')
})
router.put('/:id', (req, res) => {
  res.send('Rota de atualização de aluno.')
})
router.delete('/:id', (req, res) => {
  res.send('Rota de remoção de aluno.')
})

export default router