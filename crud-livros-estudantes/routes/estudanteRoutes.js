const express = require('express');
const router = express.Router();
const estudanteController = require('../controllers/estudanteController');

// Rotas CRUD para o Estudante
router.post('/', estudanteController.criarEstudante);   // Criar novo estudante
router.get('/', estudanteController.listarEstudantes);  // Listar todos os estudantes
router.get('/:id', estudanteController.obterEstudante); // Obter estudante por ID
router.put('/:id', estudanteController.atualizarEstudante); // Atualizar estudante por ID
router.delete('/:id', estudanteController.removerEstudante); // Remover estudante por ID

module.exports = router;