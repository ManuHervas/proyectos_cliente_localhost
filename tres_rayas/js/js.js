//funcion ganar (le pasamos el array)
//funcion para movimiento (fila, columna, -3 o +3)
//funcion pintar (array) pinta los valores de las celdas (si el  valor es 3 pinta una X y si es -3 pinta un 0)
//funcion pulsado que se va a usar para comprobar si el movimiento si puede hacer, entonces ejecuta pintar

var matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function movement(fila, columna, numero) {
  let respuesta = false;
  if (matriz[fila][columna] == 0) {
    respuesta = true;
    matriz[fila][columna] = numero;
  }
  return respuesta;
}

function paint(matriz, tabla) {
  var tds = tabla.querySelectorAll("td");
  for (let i = 0; i < tds.length; i++) {
    let valor = matriz[parseInt(i / 3)][i % 3];
    tds[i].innerHTML = valor == 0 ? "" : valor == 1 ? "X" : "O";
  }
}

function pressed() {}
