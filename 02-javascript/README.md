# Javascript #

## Variables

### Ámbito de variables

En javascript existen dos ámbitos para declarar nuestras variables: el global y el local. 

El ámbito de una variable es el alcance o extensión en el que la variable estará disponible. Básicamente, qué parte del código tendrá acceso a la variable y qué parte no lo tendrá. 

En JavaScript, cuando se declara una variable fuera de una función, se dice que la variable es global, ya que es accesible desde cualquier punto de nuestro programa.

Si defino una variable de forma global, puedo acceder a ella desde cualquier punto del programa, por ejemplo, desde dentro de una función:

```javascript
var global = "Esto es una variable global";

function() {
	var local = "Solo soy accesible en el ámbito de esta función."
	console.log(local);
	console.log(global);
}
console.log(local);
console.log(global);

// ejecute este script en REPL y comente el resultado.
```

### Hoisting

Además del ámbito de aplicación visto antes, una variable declarada con `var` es sometida a *hoisting* (**izamiento** o **levantamiento**): la declaración de la variable es **levantada** hasta el inicio del ámbito de aplicación pero la asignación al valor permanece en el sitio donde se realice.

Si intentamos acceder a su valor antes de que se asigne el valor, obtendremos un valor indefinido (`undefined`),:

```javascript
console.log(i); // undefined
var i = 1;
```

Este comportamiento se puede entender como **la variable `i` ha sido declarada en el programa pero en el momento de intentar acceder a ella aún no tenía un valor asignado**. La interpretación sería similar al siguiente código:

```javascript
var i; // Variable declarada pero valor no definido
console.log(i); // undefined
i = 1;
console.log(i); // 1
```

Sin embargo, **si la variable no es declarada en absoluto obtendremos un ReferenceError**, que no es lo mismo que obtener un valor indefinido:

```javascript
console.log(x); // ReferenceError: x is not defined
var i = 1;
```

Debido a este comportamiento, se suele recomendar mover todas las declaraciones de variables al inicio del scope aunque no se asigne valor alguno, de esta forma se evitan estos posibles errores de ejecución.

### var, let y const

Hasta ES6 contábamos con un único método para declarar variables  y era con la palabra reservada `var`: 

```javascript
// Comenzamos con la palabra reservada [var] seguido del identificador de la variable [cadenaTexto]
	var cadenaTexto;

// Para asignar valores a una variable se hace uso del operador '='
	cadenaTexto = "Valor asignado a la variable";

// Podemos declarar una variable con un valor iniciar haciendo uso de var y el operador '='
	var cadenaTexto = "Valor inicial de la variable";
```

Las  declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada **var** es su *contexto de ejecución* en curso, que puede ser la función que la contiene, local o, para las variables declaradas afuera de cualquier función, un ámbito global.

Si asignamos un valor a una variable no declarada, esta es creada como variable global, pasando a ser una propiedad del objeto global [window para el navegador y global para node].

El hoisting no es posible en variables declaradas con `let` o `const`; estas variables siempre darán un `ReferenceError` si se intenta acceder a ellas antes de que sean declaradas:

```javascript
console.log(x); // ReferenceError: x is not defined
let x = 1;
```

Con la llegada de ES6 se incorporan dos formas nuevas de declarar variables, **let** y **const** con la intención de reducir el ámbito de las variables a bloques. Cuando nos referimos a bloques hablamos de instrucciones delimitadas por llaves, sea el cuerpo de una función, instrucciones condicionales (**if**, **else**y **switch**) e iteraciones de ciclos (**for** y **while**).

Cuando usamos let restringimos el ámbito de las variables al bloque en el cual hacemos la declaración, por ejemplo:

``````javascript
// variable accesible desde cualquier punto del bloque global
let global = 1;

function() {
    // solo accesible desde el bloque de la función, todo lo que esté dentro de las llaves ({})
    let localFuncion = 2;
    if(5 > 3) {
        // solo accesible desde dentro del if
        let localCondicion = 3;
        console.log(localCondicion);
    } else {
        console.log(localFuncion);
    }
    
    console.log(global);
}

// Pruebe en REPEL
``````

El **scope** de **const** es como el de **let**, de tipo bloque, pero si con la declaración de **let** prevenimos posibles sobreescrituras no deseadas, con **const** directamente prohibimos la reasignación de valores sobre esa variable:

```javascript
const PI = 3,14;
console.log(PI = 3,14159 26535); // TypeError: Assignment to constant variable
```

Pero que no se puedan reasignar no significa que sean inmutables. Si el valor de una variable constante es mutable, como **un array o un objeto**, se pueden cambiar los valores de sus elementos.

```javascript
const teacher = { name: 'Eduardo' };
user.name = 'Kevin';
console.log(user.name); // Manolo
```

### Resumen

1. `var` declara una variable de **scope global o local para la función** sin importar el ámbito de bloque. Permite **hoisting**.
2. `let` declara una variable de **scope global, local para la función o de bloque**. Es **reasignable** y no permite hoisting.
3. `const` declara una variable de scope global, local para la función o de bloque. **No es reasignable, pero es mutable**. No permite hoisting.

## Tipos de datos

JavaScript es un lenguaje de *tipado débil* o *dinámico*. Esto significa que no es necesario declarar el tipo de variable antes de usarla. El tipo será determinado automáticamente cuando el programa comience a ser procesado. Esto también significa que puedes tener la misma variable con diferentes tipos:

```js
var foo = 42;    // foo es ahora un Number
var foo = "bar"; // foo es ahora un String
var foo = true;  // foo es ahora un Boolean
```

La última definición del estándar ECMAScript define siete tipos de datos:

**Seis tipos de datos que son**

| Primitivos | Objetos |
| :--------- | ------- |
| Boolean    | Object  |
| Null       |         |
| Undefined  |         |
| Number     |         |
| String     |         |
| Symbol     |         |

### Tipo Boolean

Boolean representa una entidad lógica y puede tener dos valores: `true`, y `false`.

### Tipo Number

De acuerdo al standard ECMAScript, sólo existe un tipo numérico: el [valor de doble precisión de 64-bits IEEE 754](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) (un número entre -(253 -1) y 253 -1). No existe un tipo específico para los números enteros. Adicionalmente a ser capaz de representar números de coma flotante, el tipo número tiene tres valores simbólicos: `+Infinity`, `-Infinity`, and [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (Not A Number o No Es Un Número).

### Tipo String

El tipo [`String`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Global_Objects/String) de Javascript es usado para representar datos textuales o cadenas de caracteres. Es un conjunto de "elementos", de valores enteros sin signo de 16 bits. Cada elemento ocupa una posición en el String. El primer elemento está en el índice 0, el próximo está en el índice 1, y así sucesivamente. La longitud de un String es el número de elementos en ella.

A diferencia de lenguajes como C, los strings en JavaScript son immutables. Esto significa que una vez que una cadena de caracteres es creada no es posible modificarla. Sin embargo es posible crear otra basandose en una operación de la cadena original. Por ejemplo:

- Un fragmento de la cadena original seleccionando letras individuales o usando [`String.substr()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr).
- Una concatenación de dos cadenas usando el operador de concatenacion (`+`) o [`String.concat()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/concat).

### Tipo Symbol

El Symbol es un nuevo tipo en JavaScript introducido en la versión ECMAScript Edition 6. Un Symbol es un valor primitivo **único** e **inmutable** y puede ser usado como la clave de una propiedad de un Object (ver debajo). En algunos lenguajes de programación, los Symbols son llamados átomos. Se pueden comparar con enumeraciones de nombres (enum) en C. Para más detalles consultar [Symbol](https://developer.mozilla.org/es/docs/Glossary/Symbol) y el objeto envoltura [`Symbol`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol) en JavaScript.

### Tipo Null

El valor `null` es un literal de Javascript que representa un valor nulo o "vacío". Es uno de los [valores primitivos](https://developer.mozilla.org/es/docs/Glossary/Primitivo) de Javascript.

El valor `null` es un literal (no una propiedad del objeto global como podría ser `undefined`). En APIs, se devuelve `null` normalmente dónde se espera un objeto pero éste no es relevante. Al comparar con `null` o  `undefined` hay que tener en cuenta las [diferencias entre los operadores de igualdad (==) e identidad (===) ](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators)(con el primero se realiza una conversión de tipo).

```js
// foo no existe, no está definido y nunca ha sido inicializado:
> foo
"ReferenceError: foo is not defined"

// foo existe, pero no tiene tipo ni valor:
> var foo = null; foo
"null"
```

### Tipo Undefined

La propiedad global **undefined** representa el valor primitivo `undefined`. Es uno de los valores primitivos de JavaScript.

`undefined` es una propiedad del *objeto global*, es decir, una variable de alcance global. El valor inicial de `undefined` es el valor primitivo `undefined`.

En navegadores modernos (JavaScript 1.8.5 / Firefox 4+), `undefined `es una propiedad *no-configurable*, *no-grabable* según la especificación ECMAScript 5. Aún cuando este no sea el caso, evite sobreescribirlo.

Una variable a la que no se le ha asignado valor, o no se ha declarado en absoluto (no se declara, no existe) son de tipo `undefined`. Un método o sentencia también devuelve `undefined` si la variable que se está evaluando no tiene asignado un valor. Una función devuelve `undefined` si no se ha devuelto.

### Tipo Object

En JavaScript los objetos pueden ser vistos como una colección de propiedades. Con la sintáxis literal de objetos, un limitado grupo de propiedades son inicializadas; luego pueden ser agregadas o eliminadas otras propiedades. Los valores de las propiedades pueden ser de cualquier tipo, incluyendo otros objetos lo cual permite construir estructuras de datos complejas. Las propiedades se identifican usando claves. Una clave es un valor String o Symbol.

### Truthy / Falfy

En [JavaScript](https://developer.mozilla.org/es/docs/Glossary/JavaScript), un **valor verdadero** es un valor que se considera  `true/verdadero` cuando es evaluado en un contexto [Booleano](https://developer.mozilla.org/es/docs/Glossary/Booleano). Todos los valores son verdaderos a menos que se definan como [falso](https://developer.mozilla.org/es/docs/Glossary/Falso) (es decir, excepto `false`, `0`, `""`, `null`, `undefined`, y `NaN`).

[JavaScript](https://developer.mozilla.org/es/docs/Glossary/JavaScript) usa [coerción](https://developer.mozilla.org/es/docs/Glossary/Type_Conversion) en los contextos Booleanos.

Ejemplos de valores *verdaderos* en JavaScript (los cuales se traducirán a verdaderos y por lo tanto ejecutarán el bloque condicional `if`):

```js
if (true) 		// true
if ({}) 		// true
if ([]) 		// true
if (42) 		// true
if ("foo") 		// true
if (new Date())  // true
if (-42) 		// true
if (3.14) 		// true
if (-3.14) 		// true
if (Infinity) 	// true
if (-Infinity) 	// true
```

Un valor **falsy** es un valor que se traduce como falso cuando es evaluado en un contexto [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) .

Ejemplos de valores *falsy* en JavaScript (los cuales son traducidos a false y asi  *bypass* el bloque `if`):

```js
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all) [1]
```

## Funciones

Las funciones son uno de los pilares fundamentales en JavaScript. Una función es un procedimiento en JavaScript un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una función, debe definirla en algún lugar del ámbito desde el cual desea llamarla.

La **definición de una función** (también llamada **declaración de función** o **sentencia de función**) consiste de la palabra clave (reservada)  [`function`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/function), seguida por:

- El nombre de la función (opcional).
- Una lista de argumentos para la función, encerrados entre paréntesis y separados por comas (,).
- Las sentencias JavaScript que definen la función, encerradas por llaves, `{ }`.

Por ejemplo, el siguiente código define una función simple llamada `square`:

```js
function square(number) {
  return number * number;
}
```

La función `square` toma un argumento, llamado `number`. La función consiste de una sentencia que expresa el retorno del argumento de la función (el cual es, `number`) multiplicado por sí mismo. La sentencia [`return`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/return) especifica el valor retornado por la función.

```js
return number * number;
```

Los parámetros primitivos (como puede ser un número) son pasados a las funciones **por valor**; el valor es pasado a la función, si la función cambia el valor del parámetro, **este cambio no es reflejado globalmente o en otra llamada a la función**.

Si pasa un objeto (p. ej. un [valor no primitivo](https://developer.mozilla.org/en-US/docs/JavaScript/Glossary), como un [`Array`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array) o un objeto definido por el usuario) como parámetro, y la función cambia las propiedades del objeto, este cambio sí es visible desde afuera de la función, como se ve en el siguiente ejemplo:

```js
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998},
var x, y;

x = mycar.make;     // x toma el valor "Honda"

myFunc(mycar);
y = mycar.make;     // y toma el valor "Toyota"
                    // (la propiedad make fue cambida por la funcion)
```

### Expresiones de función

Si bien la declaración de la función anterior es sintácticamente una sentencia, las funciones pueden también ser creadas por una **expresión de función**. Tal función puede ser **anónima**; no debe tener un nombre. Por ejemplo, la función `square` podría haber sido definida como:

```js
var square = function(number) {return number * number};
var x = square(4) //x obtiene el valor 16
```

### Llamando funciones

Definir una función no la ejecuta. Definir una función simplemente la nombra y especifica que hacer cuando la función es llamada. **Llamar** la función es lo que realmente realiza las acciones especificadas con los parámetros indicados. Por ejemplo, si define la función  `square`, podría llamarla como sigue:

```js
square(5);
```

La sentencia anterior llama a la función con el argumento 5. La función ejecuta sus sentencias y retorna el valor 25.

Las funciones deben de estar dentro del ámbito cuando son llamadas, pero la declaración de la función puede ser izada (aparecer por debajo de la llamada en el código), como muestra el siguiente ejemplo:

```js
console.log(square(5));
/* ... */
function square(n) { return n*n }
```

El ámbito de la función es la función en la que es declarada o el programa entero si ésta es declarada en el nivel superior.

### Ámbito de una función

Las variables definidas dentro de una función no pueden ser accedidas desde ningún lugar fuera de la función, ya que la variable está definida sólo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el cual está definida. En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función, también puede acceder a todas las variables definidas en su función padre y a cualquier otra variable a la que la función padre tenga acceso.

```js
// Las siguientes variables están  definidas en el ámbito global
var num1 = 20,
    num2 = 3,
    nombre = "Messi";

// Esta función se define en el ámbito global
function multiplicar() {
  return num1 * num2;
}

multiplicar(); // Retorna 60

// Un ejemplo de función anidada
function obtenerPuntaje () {
  var num1 = 2,
      num2 = 3;
  
  function agregar() {
    return nombre + " puntaje " + (num1 + num2);
  }
  
  return agregar();
}

obtenerPuntaje(); // Retorna "Messi puntaje 5"
```

### Funciones flecha

Una expresión de función flecha (también conocida como **función flecha gruesa** o **fat arrow function** en inglés) tiene una sintaxis más corta comparada con las expresiones de función y not tiene su propio `this`, [arguments](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments), [super](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super) o [new.target](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/new.target). Las funciones flecha son siempre funciones anónimas. Véase también esta entrada en el blog hacks.mozilla.org : "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)" (en inglés).

Dos factores influenciaron la introducción de las funciones flecha: funciones más cortas y el léxico `this`.

### Funciones más cortas

En algunos patrones funcionales, las funciones más cortas son bienvenidas. Compare:

```js
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );
```

### Sin propio `this`

Hasta antes de las funciones flecha, cada nueva función definía su propio valor `this` (un nuevo objeto en el caso de un constructor, no definido en llamada a funciones en [modo estricto](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto), el objeto de contexto si la función es llamada como un "método de objeto", etc.). Esto probó ser molesto en un estilo de programación orientada a objetos.

## Callbacks, Promises, Async / Await

### Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo:

```js
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

### Promise

El objeto **Promise** (Promesa) es usado para código asíncronos. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Una **Promesa** es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una *promesa* de suministrar el valor en algún momento en el futuro.

Una `Promesa` se encuentra en uno de los siguientes estados:

- *pendiente (pending)*: estado inicial, no cumplida o rechazada.
- *cumplida (fulfilled)*: significa que la operación se completó satisfactoriamente.
- *rechazada (rejected)*: significa que la operación falló.

Una promesa pendiente puede ser *cumplida* con un valor, o *rechazada* con una razón (error). Cuando cualquiera de estas dos opciones sucede, los métodos asociados, encolados por el método *then* de la promesa, son llamados. (Si la promesa ya ha sido cumplida o rechazada en el momento que es anexado su correspondiente manejador, el manejador será llamado, de tal manera que no exista una condición de carrera entre la operación asíncrona siendo completada y los manejadores siendo anexados)

Como los métodos `Promise.prototype.then()` y `Promise.prototype.catch()` retornan promesas, éstas pueden ser encadenadas.

#### Métodos

- [`Promise.all(iterable)`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/all)

  Devuelve una de dos promesas: una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas, o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada. Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable. Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

- [`Promise.race(iterable)`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/race)

  Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

- [`Promise.reject(reason)`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/reject)

  Devuelve un objeto `Promise` que es rechazado con la razón dada.

- [`Promise.resolve(value)`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/resolve)

  Devuelve un objeto `Promise` que es resuelto con el valor dado. Si el valor es un *thenable* (p.ej. tiene un método `then`), la promesa devuelta "seguirá" este thenable, adoptando su eventual estado; de lo contrario la promesa devuelta será cumplida con el valor. Generalmente, si se quiere saber si un valor es una promesa o no, se podría usar - [`Promise.resolve(value)`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/resolve) y trabajar con el valor devuelto como una promesa.

  

  ```js
  let miPrimeraPromise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono. 
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function(){
      resolve("¡Éxito!"); // ¡Todo salió bien!
    }, 250);
  });
  
  miPrimeraPromise.then((successMessage) => {
    // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
    // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
    console.log("¡Sí! " + successMessage);
  });
  ```

### Async / Await

Cuando se llama a una función `async`, esta devuelve un elemento [`Promise`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise). Cuando la función `async` devuelve un valor, `Promise` se resolverá con el valor devuelto. Si la función `async` genera una excepción o algún valor, `Promise` se rechazará con el valor generado.

Una función `async` puede contener una expresión [`await`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operators/await), la cual pausa la ejecución de la función asíncrona y espera la resolución de la `Promise` pasada y, a continuación, reanuda la ejecución de la función `async` y devuelve el valor resuelto.

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});


async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});
```

#### Reescritura de una cadena de promesas con una función `async`

Una API que devuelva una [`Promise`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise) tendrá como resultado una cadena de promesas, y dividirá la función en muchas partes. Estudie este código:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
```

Es posible reescribirlo utilizando un solo operador `async` de esta manera:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Observe que, en el ejemplo anterior, no hay ninguna instrucción `await` dentro de la instrucción `return`, porque el valor de retorno de una `async function` queda implícitamente dentro de un [`Promise.resolve`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/resolve).