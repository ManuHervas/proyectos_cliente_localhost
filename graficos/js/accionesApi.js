//Funcion que pide las ventas de kebab
//y devuelve matriz con objetos

async function traerVentas() {
  //disparamos la peticion
  var peticion = await fetch("datos.json");
  var obj = await peticion.json();
  return obj;
}
