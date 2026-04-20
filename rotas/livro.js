const { Router } = require("express")
const { getLivros,getLivrosPorIdF, postLivro } = require("../controladores/livros")
const router = Router()


router.get("/", getLivros)

router.get("/:id", getLivrosPorIdF)

router.post("/", postLivro)


router.patch("/",(req,res) =>{
    res.send("Olá mundo Alura Teste PATCH")
})

router.delete("/",(req,res) =>{
    res.send("Olá mundo Alura Teste DELETE")
})


module.exports = router