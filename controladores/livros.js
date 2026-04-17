const fs =require("fs")

function getLivros(req,res) {
    try{
        const livros = JSON.parse(fs.readFileSync("livros.json"))
        res.send(livros)
    }catch{
        res.erro(500)
        res.send("Erro na conexão")
    }
    
}

module.exports = {
    getLivros
}