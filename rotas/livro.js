const { Router } = require("express")
const { getLivros,getLivrosPorIdF, postLivro, patchLivro, deleteLivro } = require("../controladores/livros")
const router = Router()


router.get("/", getLivros)

router.get("/:id", getLivrosPorIdF)

router.post("/", postLivro)


router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivro)



module.exports = router