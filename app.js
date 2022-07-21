// Importar o express
const express = require("express");
const funcoes = require("./functions.js");

// Criar uma aplicação/servidor
const app = express();

app.use(express.json())

app.get("/usuarios", (req, res) => {
  let usuarios = funcoes.listarUsuarios();
  res.send(usuarios, 200);
});

app.get("/busca", (req, res) => {
  let trecho = req.query.trecho
  let usuariosEncontrados = funcoes.buscarUsuario(trecho)
  res.send(usuariosEncontrados)
})

app.post("/usuario", (req, res) => {
  let nome = req.body.nome
  let usuarios = funcoes.criarUsuario(nome)
  res.send(usuarios, 201 )
});

app.put(`/usuario/id:`, (req, res) => {});

app.delete(`/usuario/:id`, (req, res) => {
    let id = req.params.id
    funcoes.removerUsuario(id)
    res.send()
});

// Fazer o servidor ficar de prontidão aguardando uma requisição
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
