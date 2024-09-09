const express = require('express');
const app = express();
const livroRoutes = require('./routes/livroRoutes');
const estudanteRoutes = require('./routes/estudanteRoutes');
const aluguelRoutes = require('./routes/aluguelRoutes');

app.use(express.json());

// Rotas
app.use('/livros', livroRoutes);
app.use('/estudantes', estudanteRoutes);
app.use('/alugueis', aluguelRoutes);

// Porta do servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});