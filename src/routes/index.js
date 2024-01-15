//va a generar un router de manera dinamica
const express = require("express");
const router = express.Router();
const fs = require("fs");

//para obtener la ruta relativa
const pathRouter = `${__dirname}`; 

//funcion para remover la extension de un archivo
const removeExtension = (fileName) => {
    return fileName.split(".").shift();
};

//fs par leer todos los archivos que estan dentro de la ruta en la que me encuentro sitiado, la ruta relativa a mi script
fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file);
    const skip = ["index"].includes(fileWithOutExt);
    if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
}
});

//estamos generando otra ruta con get que dice todo lo que no haga match va a lanzar un 404 not found
router.get("*", (req, res) => {
    res.status(404);
    res.send({ error: "Not found" });
});

//al final se exporta el router
module.exports = router;