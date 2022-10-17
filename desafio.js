/* Desafío: javaScript

Nombre de Desafío: operadores_js

Instrucciones */


// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
//const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
//const nuevoNum = 22041993;

// Crea una variable booleana:
//const nuevoBool = true;

// Resuelve el siguiente problema matemático:
//const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
//const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
//const nuevoModulo = 21 % 5 === 4;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  console.log(str)

}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  console.log(x + y)
}



function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  console.log(x - y);

}


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(x * y);

}



function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log(x / y);

}


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  x = 5
  y = 6
  if (x === y) {
    true
  } else {
    false
  }
  return sonIguales
}



function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  str1 = 'Supercaligragilisticoespialidoso';
  str2 = 'Esdrujula';

  if (str1.length === str2.length) {
    true
  } else {
    false
  }
  return tienenMismaLongitud

}


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  num = 50
  if (num < 90) {
    true
  } else {
    false
  }
  return menosQueNoventa

}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  num = 50
  if (num > 50) {
    true
  } else {
    false
  }
  return mayorQueCincuenta

}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  console.log(x % y)

}


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 == 0) {
    true
  } else {
    false
  }
  return esPar

}


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  console.log(num * num)

}


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  console.log(num * num * num)

}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  console.log(Math.round(num))

}


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  console.log(Math.ceil(num))

}


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  console.log(Math.random())

}


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    "Es Positivo"
  } else if(numero<0) {
    "Es Negativo"
  } else if(numero==0) {
    false
  }

}
esPositivo (2)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  Array.push(str);
  Array.push("!")
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Jhoswe", "Genner" -> "Jhoswe Genner"
  // Tu código:
  console.log(nombre + " " + apellido)

}


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  console.log("Hola" + " " + nombre)

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  console.log(alto * ancho)

}



function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  console.log(4 * lado)

}


function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  console.log((base * altura) / 2)

}


function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  console.log(euro * 1.20)
}



function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (["a", "e", "i", "o", "u"].includes(letra.toLowerCase())) {
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }
}
