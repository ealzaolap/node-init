# DOCAPP

## Crearemos una app para visualizar la documentación online

He añadido al repositorio de github una nueva herramienta para construir todo lo necesario y lanzar un servidor express, haciendo uso de [gulp](https://gulpjs.com/). Cree tres tareas (clena, build y serve) que limpia una carpeta de destino donde guardaremos todos los documentos markdown relacionados con las clases, construye la carpeta buscando en el repositorio todos los archivos *.md y renombrándolos con el tema correspondiente de las clases  y por ultimo despliega en el puerto 3000 de nuestro ordenador un servidor web donde completaremos nuestra aplicación

Las tareas están declaradas en el fichero `gulpfile.js`

```bash
// lanzar aplicación
npm run gulp
```

## Objetivo

Crear unos endpoit que retornen una lista con todos los ficheros de las clases y mediante un parámetro devolver un fichero convertido a html.