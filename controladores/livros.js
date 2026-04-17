function getLivros(req,res) {
    try{
        res.send("Olá mundo Alura Teste GET")
    }catch{
        res.erro(500)
        res.send("Erro na conexão")
    }
    
}

module.exports = {
    getLivros
}