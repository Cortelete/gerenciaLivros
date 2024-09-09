const express = require('express');
const router = express.Router();
const aluguelController = require('../controllers/aluguelController');

// Rotas CRUD para o Aluguel
router.post('/', aluguelController.criarAluguel);    // Criar novo aluguel
router.get('/', aluguelController.listarAlugueis);   // Listar todos os aluguéis
router.get('/:id', aluguelController.obterAluguel);  // Obter aluguel por ID
router.put('/:id', aluguelController.atualizarAluguel); // Atualizar aluguel por ID

module.exports = router;