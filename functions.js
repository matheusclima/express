const usuarios = require("./database/usuarios.json")
const fs = require("fs")
const path = require("path")

const salvarUsuarios = (usuarios) => {
    let caminho = path.resolve("./database/usuarios.json")
    let json = JSON.stringify(usuarios, null, 4)
    fs.writeFileSync(caminho, json)
}

module.exports = {
    criarUsuario: (nome) => {
        let id = usuarios[usuarios.length-1].id + 1
        let usuario = {
            id,
            nome
        }
        usuarios.push(usuario)
        salvarUsuarios(usuarios)
        return usuarios
    },
    removerUsuario: (id) => {
        let user = usuarios.find(user => user.id == id )
        if(user) {
            let novaLista = usuarios.filter(usuario => usuario != user)
            salvarUsuarios(novaLista)
            return console.log("Usuário deletado")
        }
        return console.log("Usuário não encontrado")
    },
    substituirUsuario: () => {},

    buscarUsuario: (trecho) => {
        return usuarios.filter(u => u.nome.includes(trecho))
    },
    listarUsuarios: () => {
        return usuarios
    }
}