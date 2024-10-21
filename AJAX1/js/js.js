window.addEventListener("load", function () {
  //Trate la plantilla
  var contenedor = document.getElementById("contenedor");
  var auxiliar = document.createElement("div");
  var auxTbody = document.createElement("tbody");

  //Capturo la tabla

  var tabla;
  fetch("./plantillas/tabla.html")
    .then((respuesta) => respuesta.text())
    .then((texto) => {
      auxiliar.innerHTML = texto;
      var t = contenedor.firstElementChild;
      t.addEventListener("dbclick", function (ev) {
        if (!ev.ctrlKey) {
          t.classList.toggle("ACTIVADO");
        } else {
          t.classList.toggle("IMPORTANTE");
        }
      });
      tabla = auxiliar.firstElementChild;
      var tBody = tabla.tBodies[0];
      auxTbody.appendChild(tBody.firstElementChild);
      debugger;
      var modelo = auxTbody.firstElementChild;
      fetch("./datos/alumnos.json")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          datos.forEach((element) => {
            let fila = modelo.cloneNode(true);
            fila.children[0].innerHTML = element.dni;
            fila.children[1].innerHTML = element.nombre;
            tBody.appendChild(fila);
          });
          contenedor.appendChild(tabla);
        });
    });
});
