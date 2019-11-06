const Router = require("express").Router;
const docsRouter = new Router();

//Ejemplo
docsRouter.get("/", (req, res) => {
    res.send("Hello From DOCRouter");
});


/*
* @Router docs
* @GET(/:id) -> leer el fichero correspondiente usando el parámetro id
* @utilities -> npm(markdown-it) convierte una expresión markdown a html
* */


/*
* @Router docs
* @GET(/) -> Crea una lista de objeto {id: number, path: ruta del fichero} y la agrega a nuestra instancia de express
* @utilities -> fs.readdir -> lee el contenido de una carpeta
* */

module.exports = docsRouter;
