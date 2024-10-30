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

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      Math.abs(matriz[i][0] + matriz[i][1] + matriz[i][2]) === 3 ||
      Math.abs(matriz[0][i] + matriz[1][i] + matriz[2][i]) === 3
    ) {
      return matriz[i][i];
    }
  }
  // Verificar diagonales
  if (
    Math.abs(matriz[0][0] + matriz[1][1] + matriz[2][2]) === 3 ||
    Math.abs(matriz[0][2] + matriz[1][1] + matriz[2][0]) === 3
  ) {
    return matriz[1][1];
  }
  return 0;
}

function pressed(fila, columna, turno) {
  const tabla = document.getElementById("tabla");
  if (movement(fila, columna, turno)) {
    paint(matriz, tabla);
    const ganador = checkWinner();
    if (ganador !== 0) {
      setTimeout(() => {
        alert(`¡Jugador ${ganador === 1 ? "X" : "O"} ha ganado!`);
        resetGame();
      }, 100); // Espera antes de mostrar el mensaje
    }
  }
}

function resetGame() {
  matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const tabla = document.getElementById("tabla");
  paint(matriz, tabla);
}

window.addEventListener("load", function () {
  var turno = 1;
  const celdas = document.querySelectorAll("#tabla td");
  celdas.forEach((celda) => {
    celda.addEventListener("click", function () {
      const fila = this.getAttribute("data-fila");
      const columna = this.getAttribute("data-columna");

      pressed(fila, columna, turno);
      turno = turno * -1;
    });
  });
});
