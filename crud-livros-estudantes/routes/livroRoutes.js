const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

// Rotas CRUD para o Livro
router.post('/', livroController.criarLivro);   // Criar novo livro
router.get('/', livroController.listarLivros);  // Listar todos os livros
router.get('/:id', livroController.obterLivro); // Obter livro por ID
router.put('/:id', livroController.atualizarLivro); // Atualizar livro por ID
router.delete('/:id', livroController.removerLivro); // Remover livro por ID

module.exports = router;