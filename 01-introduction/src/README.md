# Ejercicios de la primera clase de Node init #

> Conjunto de ejercicios de la página [edabit](https://edabit.com/challenges/javascript).
>
> Usa node REPL para dar solución a los ejercicios siguientes, guarde en un ficheros cada caso.

### 01 Comprobar que dos cadenas de texto son iguales por sus caracteres ###

Cree una función que tome dos cadenas como argumentos y devuelva verdadero o falso dependiendo de si cada caractere en la primera cadena es igual cada caractere en la segunda cadena.

##### Ejemplo:
```javascript
comp("AB", "CD") ➞ false
comp("ABC", "ABC") ➞ true
```

### 02 Invertir una matriz ###

Escribe una función para invertir una matriz. La función tomará como argumento una matriz y devolvera otra matriz con sus valores invertidos

##### Ejemplo:
```javascript
invert(["B", "A"]) ➞ ["A", "B"]
```

### 03 Hola ${name} ###

Cree una función que tome un nombre y devuelva un saludo. No use una función normal, sino una "función de flecha".

##### Ejemplo:
```javascript
helloName("Eduardo") ➞ "Hola Eduardo"
```

### 04 Volumen de una caja ###

Cree una función que obtenga argumentos de un objeto con la altura, el ancho y la longitud de una caja y devuelva el volumen de una caja.

##### Ejemplo:
```javascript
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
```

##### Nota:

```javascript
/*
Use la misma unidad de medida para cada valor.
*/
volumen = largo * ancho * alto

```

### 05 ¿Está vacío el objeto? ###

Escriba una función que devuelva verdadero si un objeto está vacío, y falso en caso contrario.

##### Ejemplo:
```javascript
isEmpty({}) ➞ true

isEmpty({ a: 1 }) ➞ false
```

### 06 Devuelve de los objetos las claves y los valores ###

Cree una función que tome un objeto y devuelva las claves y los valores como matrices separadas.

##### Ejemplo:
```javascript
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
```



