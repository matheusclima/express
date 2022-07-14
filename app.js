// Importar o express
const express = require("express")
const db = require("./db.json")

// Criar uma aplicação/servidor
const app = express()

app.get("/usuario", (req, res) => {
    let users = JSON.stringify(db, null, 4)
    res.send(users)
})

app.post("/usuario", (req, res) => {
    
})

app.put(`/usuario/:id`, (req, res) => {

})

app.delete(`/usuario/:id`, (req, res) => {

})

// Fazer o servidor ficar de prontidão aguardando uma requisição
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})