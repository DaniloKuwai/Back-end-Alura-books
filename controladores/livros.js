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
        if(id && Number(id)){
            const livro = getTodosLivrosPorId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("Digite um número válido")
        }
       
    }catch{
        res.erro(500)
        res.send("Erro na conexão")
    }
    
}

function postLivro(req,res){
    try{
        const LivroNovo = req.body
        if(req.body.nome){
            insereLivro(LivroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("O nome é obrigatório")
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req,res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            modificaLivro(body,id)
            res.send("Item modificado com sucesso")
        }else{
            res.status(422)
            res.send("Digite um número válido")
        }
        
    }catch{
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req,res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deletaLivroPorId(id)
            res.send("Livro deletado")
        }else{
            res.status(422)
            res.send("Digite um número válido")
        }
        
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