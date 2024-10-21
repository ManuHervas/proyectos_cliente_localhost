window.addEventListener("load", function () {
  const btnSubmit = document.getElementById("enviar");
  const formulario = btnSubmit.form;
  const inputFile = formulario["fichero"];
  //Programo boton enviar
  btnSubmit.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (inputFile.files.length > 0) {
      var lector = new FileReader();
      lector.onload = function (ev) {
        var filas = this.result.split("\n");
        var cabeceras = filas[0].split(";");
        var filaDatos = filas.slice(1);
        var datos = filaDatos.map(function (v) {
          return v.split(";");
        });

        const tabla = document.createElement("table");
        const tbody = document.createElement("tbody");
        const encabezado = document.createElement("tr");
        const thNombre = document.createElement("th");
        const thDni = document.createElement("th");

        thNombre.textContent = "Nombre";

        thDni.textContent = "DNI";

        encabezado.appendChild(thNombre);
        encabezado.appendChild(thDni);

        datos.forEach((persona) => {
          const fila = document.createElement("tr");

          const celdaNombre = document.createElement("td");
          celdaNombre.textContent = persona.nombre;

          const celdaDni = document.createElement("td");
          celdaDni.textContent = persona.dni;
          fila.appendChild(celdaNombre);
          fila.appendChild(celdaDni);

          tbody.appendChild(fila);
        });

        tabla.appendChild(tbody);

        const contenedorTabla = document.getElementById("contenedorTabla");
        contenedorTabla.appendChild(tabla);
      };
      lector.readAsText(inputFile.files[0]);
    } else {
      alert("Selecciona un fichero válido");
    }
  });
});
