const { getTodosLivros,getTodosLivrosPorId,insereLivro, modificaLivro, deletaLivroPorId } = require("../servicos/livro")

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

function patchLivro(req,res){
    try{
        const id = req.params.id
        const body = req.body
        modificaLivro(body,id)
        res.send("Item modificado com sucesso")
    }catch{
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req,res){
    try{
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("Livro deletado")
    }catch{
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivrosPorIdF,
    postLivro,
    patchLivro,
    deleteLivro
}