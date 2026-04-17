const fs = require("fs")
const DadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const NovoDado =  { id: '3', nome: 'Livro Adicionado' }

fs.writeFileSync("livros.json", JSON.stringify([...DadosAtuais,NovoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")))