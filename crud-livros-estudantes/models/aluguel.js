class Aluguel {
    constructor(id, idLivro, idEstudante, dataAluguel, dataDevolucao = null) {
      this.id = id;
      this.idLivro = idLivro;
      this.idEstudante = idEstudante;
      this.dataAluguel = dataAluguel;
      this.dataDevolucao = dataDevolucao;
    }
  }
  
  module.exports = Aluguel;