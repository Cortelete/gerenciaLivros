const Livro = require('../models/livro');
let livros = []; // Simulando um banco de dados com um array

exports.criarLivro = (req, res) => {
  const { id, titulo, autor, ano, genero } = req.body;
  const livro = new Livro(id, titulo, autor, ano, genero);
  livros.push(livro);
  res.status(201).json(livro);
};

exports.listarLivros = (req, res) => {
  res.json(livros);
};

exports.obterLivro = (req, res) => {
  const { id } = req.params;
  const livro = livros.find(livro => livro.id == id);
  if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
  res.json(livro);
};

exports.atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, genero } = req.body;
  const livro = livros.find(livro => livro.id == id);
  if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
  livro.titulo = titulo || livro.titulo;
  livro.autor = autor || livro.autor;
  livro.ano = ano || livro.ano;
  livro.genero = genero || livro.genero;
  res.json(livro);
};

exports.removerLivro = (req, res) => {
  const { id } = req.params;
  livros = livros.filter(livro => livro.id != id);
  res.status(204).end();
};

exports.livros = livros; // Exporta a variável livros
