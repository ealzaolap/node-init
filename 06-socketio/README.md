# Socket IO

El intercambio de información es una de las piedras angulares en las aplicaciones web de hoy en día, es por eso que surgen proyectos tan completos como Socket.io, una librería JavaScript para comunicación web en tiempo real.

 El protocolo HTTP fue concebido desde sus orígenes para ofrecer comunicaciones en un sólo sentido, desde el servidor hacia el cliente. Sin embargo las aplicaciones web de hoy en día demandan más que eso para poder ofrecer una experiencia de usuario más rica, necesitan **flujo de información en ambos sentidos** en el mismo instante en el que ocurren los eventos. 

El protocolo HTTP fue concebido desde sus orígenes para ofrecer comunicaciones en un sólo sentido, desde el servidor hacia el cliente. Sin embargo las aplicaciones web de hoy en día demandan más que eso para poder ofrecer una experiencia de usuario más rica, necesitan **flujo de información en ambos sentidos** en el mismo instante en el que ocurren los eventos.

Para mitigar esa necesidad han aparecido varias estrategias, entre ellas [*long polling*](https://en.wikipedia.org/wiki/Comet_(programming)) y *Websocket*. En *long polling* el cliente se mantiene haciendo preguntas al servidor sobre un determinado evento mientras que con *Websocket* tenemos a nuestra disposición un nuevo protocolo que permite la interacción entre el cliente y el servidor, facilitando la **transmisión de datos en tiempo real en ambas direcciones**. Es aquí donde entra **Socket.io**.

 **[Socket.io](http://socket.io/)** es una librería en [JavaScript](http://bitelia.com/tag/javascript) para [Node.js](https://hipertextual.com/archivo/2014/08/socketio-javascript/) que permite una comunicación bidireccional en tiempo real entre cliente y servidor. Para ello se basa principalmente en *Websocket* pero también puede usar otras alternativas como *sockets* de Adobe Flash, JSONP polling o long polling en AJAX, seleccionando la mejor alternativa para el cliente justo en tiempo de ejecución. 

 Es importante resaltar que las aplicaciones hechas en Socket.io tiene una desventaja y es que **no soportan interacciones con otros clientes que usen Websocket estándar**. Esto se debe a que Socket.io no es una implementación del protocolo Websocket sino una librería de comunicación web en tiempo real que utiliza varios protocolos. Sin embargo, eso no le quita que sea muy poderosa y fácil de usar, ideal para cualquier proyecto en el que tanto el cliente como el servidor puedan usar la misma librería. 

## Chat en tiempo real para nuestra aplicación.

Socket.IO se compone de dos partes:

- Un servidor que se integra (o se monta) en el servidor HTTP [Node.JS](https://github.com/socketio/socket.io) : [socket.io](https://github.com/socketio/socket.io)
- Una biblioteca de cliente que se carga en el lado del navegador: [socket.io-client](https://github.com/socketio/socket.io-client)

Durante el desarrollo, `socket.io`sirve al cliente automáticamente para nosotros, como veremos, por lo que por ahora solo tenemos que instalar un módulo:

```
npm install --save socket.io
```

Eso instalará el módulo y agregará la dependencia a `package.json`. Ahora editemos `www`para agregarlo:

```javascript
const io = require('socket.io');

io.on('connection', function(socket){
    console.log('a user connected');
});	
```

