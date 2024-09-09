const Aluguel = require('../models/aluguel');
const livroController = require('../controllers/livroController');
const estudanteController = require('../controllers/estudanteController');
let alugueis = [];

// Função para verificar se um livro está alugado
const livroEstaAlugado = (idLivro) => {
  return alugueis.some(aluguel => aluguel.idLivro == idLivro && !aluguel.dataDevolucao);
};

exports.criarAluguel = (req, res) => {
  const { id, idLivro, idEstudante, dataAluguel, dataDevolucao } = req.body;
  const livro = livroController.livros.find(livro => livro.id == idLivro);
  const estudante = estudanteController.estudantes.find(estudante => estudante.id == idEstudante);

  if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
  if (!estudante) return res.status(404).json({ message: 'Estudante não encontrado' });

  // Verifica se o livro está alugado
  if (livroEstaAlugado(idLivro)) {
    return res.status(400).json({ message: 'Livro já está alugado' });
  }

  const aluguel = new Aluguel(id, idLivro, idEstudante, dataAluguel, dataDevolucao);
  alugueis.push(aluguel);
  res.status(201).json(aluguel);
};

exports.listarAlugueis = (req, res) => {
  res.json(alugueis);
};

exports.obterAluguel = (req, res) => {
  const { id } = req.params;
  const aluguel = alugueis.find(aluguel => aluguel.id == id);
  if (!aluguel) return res.status(404).json({ message: 'Aluguel não encontrado' });
  res.json(aluguel);
};

exports.atualizarAluguel = (req, res) => {
  const { id } = req.params;
  const { dataDevolucao } = req.body;
  const aluguel = alugueis.find(aluguel => aluguel.id == id);
  if (!aluguel) return res.status(404).json({ message: 'Aluguel não encontrado' });
  
  // Atualiza a data de devolução e permite o aluguel do livro novamente
  aluguel.dataDevolucao = dataDevolucao || aluguel.dataDevolucao;
  res.json(aluguel);
};
