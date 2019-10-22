const http = require("http");
const fs = require("fs");
const url = require("url");

// Hacemos uso del módulo http para crear un servidor
http.createServer((request, response) => {
		// Parseamos la ruta solicitada por el cliente
		let pathname = url.parse(request.url).pathname;

		console.log(`Petición por ${pathname} recivida.`);

		/*
		* Buscamos si existe un endpoint para esa ruta, en este caso si existe algún fichero
	  */
		fs.readFile(pathname.substr(1), ((err, data) => {
				if (err) {
						console.error(err);
						// HTTP Status: 404 : NOT Found
						// Content Type: text/plain
						response.writeHead(404, {'Content-Type': 'text/html'});
				} else {
						// El fichero html existe
						// HTTP Status: 200 : OK
						// Content-Type : text/plain
						response.writeHead(200, {'Content-Type': 'text/html'});

						// Escribimos en el body de la respuesta el contenido del fichero
						response.write(data.toString());
				}
				// Enviamos la respuesta sea OK o ERROR
				response.end();
		}));
}).listen(3000, () => console.log(`Server running on localhost:3000`));
