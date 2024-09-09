const Estudante = require('../models/estudante');
let estudantes = []; // Simulando um banco de dados com um array

exports.criarEstudante = (req, res) => {
  const { id, nome, matricula, curso, ano } = req.body;
  const estudante = new Estudante(id, nome, matricula, curso, ano);
  estudantes.push(estudante);
  res.status(201).json(estudante);
};

exports.listarEstudantes = (req, res) => {
  res.json(estudantes);
};

exports.obterEstudante = (req, res) => {
  const { id } = req.params;
  const estudante = estudantes.find(estudante => estudante.id == id);
  if (!estudante) return res.status(404).json({ message: 'Estudante não encontrado' });
  res.json(estudante);
};

exports.atualizarEstudante = (req, res) => {
  const { id } = req.params;
  const { nome, matricula, curso, ano } = req.body;
  const estudante = estudantes.find(estudante => estudante.id == id);
  if (!estudante) return res.status(404).json({ message: 'Estudante não encontrado' });
  estudante.nome = nome || estudante.nome;
  estudante.matricula = matricula || estudante.matricula;
  estudante.curso = curso || estudante.curso;
  estudante.ano = ano || estudante.ano;
  res.json(estudante);
};

exports.removerEstudante = (req, res) => {
  const { id } = req.params;
  estudantes = estudantes.filter(estudante => estudante.id != id);
  res.status(204).end();
};

exports.estudantes = estudantes; // Exporta a variável estudantes
