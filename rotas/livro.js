const { Router } = require("express")
const { getLivros,getLivrosPorIdF } = require("../controladores/livros")
const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivrosPorIdF)

router.post("/",(req,res) =>{
    res.send("Olá mundo Alura Teste POST")
})

router.patch("/",(req,res) =>{
    res.send("Olá mundo Alura Teste PATCH")
})

router.delete("/",(req,res) =>{
    res.send("Olá mundo Alura Teste DELETE")
})


module.exports = router