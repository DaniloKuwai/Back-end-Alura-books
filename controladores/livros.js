const { getTodosLivros,getTodosLivrosPorId } = require("../servicos/livro")

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

module.exports = {
    getLivros,
    getLivrosPorIdF
}