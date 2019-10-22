# ExpressJS #

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. Cuenta con una amplia variedad de utilidades HTTP y middlewares para la creación de APIS sólidas de manera rápida y sencilla.

## Vistazo general a ExpressJS

### Instalación del framework ###

```bash
npm install express --save
```

### Crear servidores web es muy sencillo ###

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

Con solo unas cuantas líneas de código tenemos un servidor corriendo y escuchando en un puerto de nuestro ordenador.

### Generador de aplicaciones

Contamos con una herramienta de generación de aplicaciones, `express`, para crear rápidamente un esqueleto de aplicación.

Instale `express-generator` con el siguiente mandato:

```sh
$ npm install express-generator -g
```

Muestre las opciones de mandato con la opción `-h`:

```sh
$ express -h

  Usage: express [options][dir]

  Options:

    -h, --help          muestra información útil
        --version       muestra la versión actual de la herramienta
    -e, --ejs           añade soporte para ejs
        --hbs           añade soporte para handlebars
        --pug           añade soporte para pug
    -H, --hogan         añade soporte para hogan.js
        --no-view       genera la aplicación sin soporte para plantillas
    -v, --view <engine> añade soporte (ejs|hbs|hjs|jade|pug|twig|vash) (defecto jade)
    -c, --css <engine>  añade soporte (less|stylus|compass|sass) (defecto css)
        --git           añade .gitignore
    -f, --force         fuerza la creación en un directorio no vacio
```

Por ejemplo, el código siguiente crea una aplicación Express denominada *myapp*. La aplicación será creada en una carpeta llamada *myapp* en el directorio de trabajo actual y el motor de vistas será asignado a [Pug](https://pugjs.org/):

```sh
$ express --view=pug myapp

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.pug
   create : myapp/views/layout.pug
   create : myapp/views/error.pug
   create : myapp/bin
   create : myapp/bin/www
```

A continuación, instale las dependencias:

```sh
$ cd myapp
$ npm install
```

En MacOS o Linux, ejecute la aplicación con este mandato:

```sh
$ DEBUG=myapp:* npm start
```

En Windows, utilice este mandato:

```sh
> set DEBUG=myapp:* & npm start
```

A continuación, cargue `http://localhost:3000/` en el navegador para acceder a la aplicación.

La aplicación generada tiene la siguiente estructura de directorios:

```sh
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```

### Direccionamiento con ExpressJS

Express nos brinda una manera mas fácil y productiva para manejar el direccionamiento en el desarrollo de aplicaciones web con nodejs, dándonos un conjunto de herramientas para tratar las solicitudes y respuestas de un cliente a un determinado endpoint. 

Para definir un manejador de ruta se utiliza la siguiente expresión `app.METHOD(PATH, HANDLER)` siendo:

- `app` una instancia de `express`.
- `METHOD` un [método de solicitud HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).
- `PATH` una vía de acceso en el servidor.
- `HANDLER` la función que se ejecuta cuando se correlaciona la ruta (callback).

El siguiente ejemplo ilustra la definición de rutas simples.

Responda con `Hello World!` en la página inicial:

```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

Responda a la solicitud POST en la ruta raíz (`/`), la página de inicio de la aplicación:

```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```

Responda a una solicitud PUT en la ruta `/user`:

```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
```

Responda a una solicitud DELETE en la ruta `/user`:

```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

 ### Sirviendo archivos estáticos en Express

Para el servicio de archivos estáticos como, por ejemplo, imágenes, archivos CSS y archivos JavaScript, utilice la función de middleware incorporado `express.static` de Express.

Pase el nombre del directorio que contiene los activos estáticos a la función de middleware `express.static` para empezar directamente el servicio de los archivos. Por ejemplo, utilice el siguiente código para el servicio de imágenes, archivos CSS y archivos JavaScript en un directorio denominado `public`:

```javascript
app.use(express.static('public'));
```

Ahora, puede cargar los archivos que hay en el directorio `public`:

```javascript
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

Express busca los archivos relativos al directorio estático, por lo que el nombre del directorio estático no forma parte del URL.

Para utilizar varios directorios de activos estáticos, invoque la función de middleware `express.static` varias veces:

```javascript
app.use(express.static('public'));
app.use(express.static('files'));
```

Express busca los archivos en el orden en el que se definen los directorios estáticos con la función de middleware `express.static`.

Para crear un prefijo de vía de acceso virtual (donde la vía de acceso no existe realmente en el sistema de archivos) para los archivos a los que da servicio la función `express.static`, [especifique una vía de acceso de montaje](https://expressjs.com/es/4x/api.html#app.use) para el directorio estático, como se muestra a continuación:

```javascript
app.use('/static', express.static('public'));
```

Ahora, puede cargar los archivos que hay en el directorio `public` desde el prefijo de vía de acceso `/static`.

```javascript
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

No obstante, la vía de acceso que proporciona a la función `express.static` es relativa al directorio desde donde inicia el proceso `node`. Si ejecuta la aplicación Express desde cualquier otro directorio, es más seguro utilizar la vía de acceso absoluta del directorio al que desea dar servicio:

```javascript
app.use('/static', express.static(__dirname + '/public'));
```

## Direccionamiento

*Direccionamiento* hace referencia a la definición de puntos finales de aplicación (URI) y cómo responden a las solicitudes de cliente.

El siguiente código es un ejemplo de una ruta muy básica.

```javascript
var express = require('express');
var app = express();

// Responde con 'hello world' cuando se hace una petición a la ruta '/'
app.get('/', function(req, res) {
  res.send('hello world');
});
```

### Métodos de ruta

Un método de ruta se deriva de uno de los métodos HTTP y se adjunta a una instancia de la clase `express`.

El siguiente código es un ejemplo de las rutas que se definen para los métodos GET y POST a la raíz de la aplicación.

```javascript
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
```

Express da soporte a los siguientes métodos de direccionamiento que se corresponden con los métodos HTTP: `get`, `post`, `put`, `head`, `delete`, `options`, `trace`, `copy`, `lock`, `mkcol`, `move`, `purge`, `propfind`, `proppatch`, `unlock`, `report`, `mkactivity`, `checkout`, `merge`, `m-search`, `notify`, `subscribe`, `unsubscribe`, `patch`, `search` y `connect`.

Hay un método de direccionamiento especial, `app.all()`, que no se deriva de ningún método HTTP. Este método se utiliza para cargar funciones de middleware en una vía de acceso para todos los métodos de solicitud.

En el siguiente ejemplo, el manejador se ejecutará para las solicitudes a “/secret”, tanto si utiliza GET, POST, PUT, DELETE, como cualquier otro método de solicitud HTTP soportado en el [módulo http](https://nodejs.org/api/http.html#http_http_methods).

```javascript
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
```

### Vías de acceso de ruta

Las vías de acceso de ruta, en combinación con un método de solicitud, definen los puntos finales en los que pueden realizarse las solicitudes. Las vías de acceso de ruta pueden ser series, patrones de serie o expresiones regulares.

Estos son algunos ejemplos de vías de acceso de ruta basadas en series.

Esta vía de acceso de ruta coincidirá con las solicitudes a la ruta raíz, `/`.

```javascript
app.get('/', function (req, res) {
  res.send('root');
});
```

Esta vía de acceso de ruta coincidirá con las solicitudes a `/about`.

```javascript
app.get('/about', function (req, res) {
  res.send('about');
});
```

Esta vía de acceso de ruta coincidirá con las solicitudes a `/random.text`.

```javascript
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
```

Estos son algunos ejemplos de vías de acceso de ruta basadas en patrones de serie.

Esta vía de acceso de ruta coincidirá con `acd` y `abcd`.

```javascript
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
```

Esta vía de acceso de ruta coincidirá con `abcd`, `abbcd`, `abbbcd`, etc.

```javascript
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});
```

Esta vía de acceso de ruta coincidirá con `abcd`, `abxcd`, `abRABDOMcd`, `ab123cd`, etc.

```javascript
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});
```

Esta vía de acceso de ruta coincidirá con `/abe` y `/abcde`.

```javascript
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});
```

Los caracteres ?, +, * y () son subconjuntos de sus contrapartidas de expresiones regulares. El guión (-) y el punto (.) se interpretan literalmente en las vías de acceso basadas en series.

Ejemplos de vías de acceso de ruta basadas en expresiones regulares:

Esta vía de acceso de ruta coincidirá con cualquier valor con una “a” en el nombre de la ruta.

```javascript
app.get(/a/, function(req, res) {
  res.send('/a/');
});
```

Esta vía de acceso de ruta coincidirá con `butterfly` y `dragonfly`, pero no con `butterflyman`, `dragonfly man`, etc.

```javascript
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});
```

### Manejadores de rutas

Puede proporcionar varias funciones de devolución de llamada que se comportan como [middleware](https://expressjs.com/es/guide/using-middleware.html) para manejar una solicitud. La única excepción es que estas devoluciones de llamada pueden invocar `next('route')` para omitir el resto de las devoluciones de llamada de ruta. Puede utilizar este mecanismo para imponer condiciones previas en una ruta y, a continuación, pasar el control a las rutas posteriores si no hay motivo para continuar con la ruta actual.

Los manejadores de rutas pueden tener la forma de una función, una matriz de funciones o combinaciones de ambas, como se muestra en los siguientes ejemplos.

Una función de devolución de llamada individual puede manejar una ruta. Por ejemplo:

```javascript
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});
```

Más de una función de devolución de llamada puede manejar una ruta (asegúrese de especificar el objeto `next`). Por ejemplo:

```javascript
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});
```

Una matriz de funciones de devolución de llamada puede manejar una ruta. Por ejemplo:

```javascript
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);
```

Una combinación de funciones independientes y matrices de funciones puede manejar una ruta. Por ejemplo:

```javascript
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});
```

### Métodos de respuesta

Los métodos en el objeto de respuesta (`res`) de la tabla siguiente pueden enviar una respuesta al cliente y terminar el ciclo de solicitud/respuestas. Si ninguno de estos métodos se invoca desde un manejador de rutas, la solicitud de cliente se dejará colgada.

| Método                                                       | Descripción                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [res.download()](https://expressjs.com/es/4x/api.html#res.download) | Solicita un archivo para descargarlo.                        |
| [res.end()](https://expressjs.com/es/4x/api.html#res.end)    | Finaliza el proceso de respuesta.                            |
| [res.json()](https://expressjs.com/es/4x/api.html#res.json)  | Envía una respuesta JSON.                                    |
| [res.jsonp()](https://expressjs.com/es/4x/api.html#res.jsonp) | Envía una respuesta JSON con soporte JSONP.                  |
| [res.redirect()](https://expressjs.com/es/4x/api.html#res.redirect) | Redirecciona una solicitud.                                  |
| [res.render()](https://expressjs.com/es/4x/api.html#res.render) | Representa una plantilla de vista.                           |
| [res.send()](https://expressjs.com/es/4x/api.html#res.send)  | Envía una respuesta de varios tipos.                         |
| [res.sendFile](https://expressjs.com/es/4x/api.html#res.sendFile) | Envía un archivo como una secuencia de octetos.              |
| [res.sendStatus()](https://expressjs.com/es/4x/api.html#res.sendStatus) | Establece el código de estado de la respuesta y envía su representación de serie como el cuerpo de respuesta. |

### app.route()

Puede crear manejadores de rutas encadenables para una vía de acceso de ruta utilizando `app.route()`. Como la vía de acceso se especifica en una única ubicación, la creación de rutas modulares es muy útil, al igual que la reducción de redundancia y errores tipográficos. Para obtener más información sobre las rutas, consulte: [Documentación de Router()](https://expressjs.com/es/4x/api.html#router).

A continuación, se muestra un ejemplo de manejadores de rutas encadenados que se definen utilizando `app.route()`.

```javascript
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
```

### express.Router

Utilice la clase `express.Router` para crear manejadores de rutas montables y modulares. Una instancia `Router` es un sistema de middleware y direccionamiento completo; por este motivo, a menudo se conoce como una “miniaplicación”.

El siguiente ejemplo crea un direccionador como un módulo, carga una función de middleware en él, define algunas rutas y monta el módulo de direccionador en una vía de acceso en la aplicación principal.

Cree un archivo de direccionador denominado `birds.js` en el directorio de la aplicación, con el siguiente contenido:

```javascript
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

A continuación, cargue el módulo de direccionador en la aplicación:

```javascript
var birds = require('./birds');
...
app.use('/birds', birds);
```

La aplicación ahora podrá manejar solicitudes a `/birds` y `/birds/about`, así como invocar la función de middleware `timeLog` que es específica de la ruta.

## Middleware

### Visión general

Las funciones de *middleware* son funciones que tienen acceso al [objeto de solicitud](https://expressjs.com/es/4x/api.html#req) (`req`), al [objeto de respuesta](https://expressjs.com/es/4x/api.html#res) (`res`) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación. La siguiente función de middleware se denota normalmente con una variable denominada `next`.

Las funciones de middleware pueden realizar las siguientes tareas:

- Ejecutar cualquier código.
- Realizar cambios en la solicitud y los objetos de respuesta.
- Finalizar el ciclo de solicitud/respuestas.
- Invocar el siguiente middleware en la pila.

Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar `next()` para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.

A continuación, se muestra un ejemplo de una aplicación Express simple, “Hello World”, para la que definirá dos funciones de middleware:

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
```

### Creación de middlewares

Este es un ejemplo simple de una función de middleware denominada “myLogger”. Esta función simplemente imprime “LOGGED” cuando una solicitud de la aplicación pasa por ella. La función de middleware se asigna a una variable denominada `myLogger`.

```javascript
var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
```

Para cargar la función de middleware, llame a `app.use()`, especificando la función de middleware. Por ejemplo, el siguiente código carga la función de middleware `myLogger` antes de la ruta a la vía de acceso raíz (/).

```javascript
var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
```

Cada vez que la aplicación recibe una solicitud, imprime el mensaje “LOGGED” en el terminal.

El orden de carga del middleware es importante: las funciones de middleware que se cargan primero también se ejecutan primero.

Si `myLogger` se carga después de la ruta a la vía de acceso raíz, la solicitud nunca la alcanza y la aplicación no imprime “LOGGED”, ya que el manejador de rutas de la vía de acceso raíz determina el ciclo de solicitud/respuestas.

La función de middleware `myLogger` simplemente imprime un mensaje y, a continuación, pasa la solicitud a la siguiente función de middleware de la pila llamando a la función `next()`.

## Motores de plantilla en Express

Para que Express pueda representar archivos de plantilla, deben establecerse los siguientes valores de aplicación:

- `views`, el directorio donde se encuentran los archivos de plantilla. Ejemplo: `app.set('views', './views')`
- `view engine`, el motor de plantilla que se utiliza. Ejemplo: `app.set('view engine', 'pug')`

A continuación, instale el paquete npm de motor de plantilla correspondiente:

```sh
$ npm install pug --save
```

Una vez establecida la propiedad view engine, no tiene que especificar el motor ni cargar el módulo de motor de plantilla en la aplicación; Express carga el módulo internamente, como se muestra a continuación (para el ejemplo anterior).

```javascript
app.set('view engine', 'pug');
```

Cree un archivo de plantilla Pug denominado `index.pug` en el directorio `views`, con el siguiente contenido:

```javascript
html
  head
    title= title
  body
    h1= message
```

A continuación, cree una ruta para representar el archivo `index.pug`. Si la propiedad `view engine` no se establece, debe especificar la extensión del archivo `view`. De lo contrario, puede omitirla.

```javascript
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
```

Cuando realice una solicitud a la página de inicio, el archivo `index.pug` se representará como HTML.

