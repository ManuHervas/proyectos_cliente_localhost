//Metodo ordenar
//Ordena el primer Tbody de la tabla por la columna indicada
//Usando la funcion ordenadora o orden lexicográfico si no se pasa
//Parámetros
//Columna un número entre 0 y columnas -1
//funcionOrdenadora parámtro voluntario caso de pasarse
//function (a,b){
//return(+-0)}
HTMLTableElement.prototype.ordenar = function (
  columna,
  orden = 1,
  funcionOrdenadora
) {
  var cuerpo = this.getElementsByTagName("tbody")[0];
  var filas = cuerpo.getElementsByTagName("tr");

  var v = Array.from(filas);
  if (funcionOrdenadora) {
    v.sort(function (f1, f2) {
      return (
        orden *
        funcionOrdenadora(
          f1.cells[columna].innerHTML,
          f2.cells[columna].innerHTML
        )
      );
    });
  } else {
    v.sort(function (f1, f2) {
      return (
        orden *
        f1.cells[columna].innerHTML.localeCompare(f2.cells[columna].innerHTML)
      );
    });
    v.forEach(function (v) {
      cuerpo.appendChild(v);
    });
  }
};
