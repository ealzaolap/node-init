const Router = require("express").Router;
const fs = require("fs");
const path = require("path");
const docsRouter = new Router();
const markdown = require("markdown-it");

const DIST_PATH = path.resolve("./dist");
/*
* @Router docs
* @GET(/:id) -> leer el fichero correspondiente usando el parámetro id
* @utilities -> npm(markdown-it) convierte una expresión markdown a html
* */
docsRouter.post("/", (req, res) => {
    let fileRoute = req.body.path;
    fs.readFile(fileRoute, ((err, data) => {
        if (err) {
            res.status(500);
            res.send("Bad route");
        } else {
            let md = new markdown();
            let fileParser = md.render(data.toString());
            res.send(JSON.stringify({file: fileParser}));
        }
    }))
});

/*
* @Router docs
* @GET(/) -> Crea una lista de objeto {id: number, path: ruta del fichero} y la agrega a nuestra instancia de express
* @utilities -> fs.readdir -> lee el contenido de una carpeta
* */
docsRouter.get("/", (request, response) => {
    let docs = [];
    fs.readdir(DIST_PATH, ((err, files) => {
        for (let file of files) {
            docs.push(
                {   id: files.indexOf(file),
                    pathDocs: path.join(DIST_PATH, `/${file}`),
                    name: file
                });

        }
        response.json(docs);
    }));
});


module.exports = docsRouter;
