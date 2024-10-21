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
        var filas = this.result.split("\r\n");
        var cabeceras = filas[0].split(";");
        var filaDatos = filas.slice(1);
        var datos = filaDatos.map(function (v) {
          return v.split(";");
        });
      };
      lector.readAsText(inputFile.files[0]);
      console.log(lector.result);
    } else {
      alert("Selecciona un fichero válido");
    }
  });
});
