/*window.addEventListener("load", function () {
  const archivoInput = document.getElementById("archivoInput");
  const contenidoArchivo = document.getElementById("contenidoArchivo");

  // Evento al cambiar (cuando seleccionas un archivo)
  archivoInput.addEventListener("change", function (event) {
    const archivo = event.target.files[0]; // Obtiene el primer

    // Verifica si hay un archivo seleccionado
    if (archivo) {
      const lector = new FileReader(); // Creamos el lector de archivos

      // Cuando el archivo ha sido leído
      lector.onload = function (e) {
        contenidoArchivo.textContent = e.target.result; // Mostramos el contenido
      };

      lector.onerror = function () {
        console.log("Error al leer el archivo");
      };

      // Leer archivo como texto
      lector.readAsText(archivo);
    }
  });
}); */

window.addEventListener("load", function () {
  const archivoInput = document.getElementById("archivoInput");
  const btnSubmit = document.getElementById("enviar");
  const tabla = document.getElementById("tablaCSV").querySelector("tbody");

  btnSubmit.addEventListener("click", function (ev) {
    //evitamos que redireccione la página si esta en un formulario
    //ev.preventDefault();
    if (archivoInput.files.length > 0) {
      const archivo = archivoInput.files[0];
      console.log("tiene filas");
      const lector = new FileReader();

      lector.onload = function (e) {
        const contenido = e.target.result;
        console.log(contenido);
        const filas = contenido.split("\n");

        //procesamos cada fila
        filas.forEach(function (fila, index) {
          if (index === 0) return; //omitimos la primera fila que es la cabezera
          const columnas = fila.split(",");

          if (columnas.length === 2) {
            //nos aseguramos que se ha hecho el split y hay dos columnas (nombre y apellido)
            const filaTabla = document.createElement("tr");

            //Creamos las celdas de nombre y dni
            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = columnas[0].trim();

            const celdaDni = document.createElement("td");
            celdaDni.textContent = columnas[1].trim();

            filaTabla.appendChild(celdaNombre);
            filaTabla.appendChild(celdaDni);

            tabla.appendChild(filaTabla);
          }
        });
      };
      lector.readAsText(archivo);
    } else {
      alert("Seleccione un archivo CSV");
    }
  });
});
