const express =  require("express")
const router =  express.Router() //nos permite generar rutas fuera del script principal app.js
const postController = require("../controllers/posts")

router.get("/", postController.getAll)
router.get("/:id", postController.getById)
router.post("/", postController.post)
router.put("/:id", postController.put)
router.delete("/:id", postController.delete)

router.get("/", (req, res)=>{
    res.status(200).send("Hola mundo desde posts")
})

//router.post("/login", userController.login)
// router.post("/logout", userController.logout)

module.exports = router