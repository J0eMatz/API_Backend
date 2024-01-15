const express =  require("express")
const router =  express.Router() //nos permite generar rutas fuera del script principal app.js
const userController = require("../controllers/users")

router.get("/", userController.getAll)
router.get("/:id", userController.getById)
router.post("/", userController.post)
router.put("/:id", userController.put)
router.delete("/:id", userController.delete)

router.get("/", (req, res)=>{
    res.status(200).send("Hola mundo desde users")
})

//router.post("/login", userController.login)
// router.post("/logout", userController.logout)

module.exports = router