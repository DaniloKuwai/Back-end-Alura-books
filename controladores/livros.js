const { getTodosLivros,getTodosLivrosPorId,insereLivro } = require("../servicos/livro")

function getLivros(req,res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch{
        res.erro(500)
        res.send("Erro na conexão")
    }
    
}

function getLivrosPorIdF(req,res) {
    try{
        const id = req.params.id
        const livro = getTodosLivrosPorId(id)
        res.send(livro)
    }catch{
        res.erro(500)
        res.send("Erro na conexão")
    }
    
}

function postLivro(req,res){
    try{
        const LivroNovo = req.body
        insereLivro(LivroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivrosPorIdF,
    postLivro
}