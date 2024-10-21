window.addEventListener("load", function () {
  const btnSubmit = document.getElementById("enviar");
  const formulario = btnSubmit.form;
  const inputFile = formulario["fichero"];

  //Programo boton enviar
  btnSubmit.addEventListener("click", function (ev) {
    //Con esto evitamos que nos redireccione al fichero php que le hemos puesto en el form
    ev.preventDefault();

    if (inputFile.files.length > 0) {
      var lector = new FileReader();

      lector.onload = function () {
        var filas = this.result.split("\r\n");
        //var cabeceras = filas[0].split(";");
        var filaDatos = filas.slice(1);
        var datos = filaDatos.map(function (v) {
          return v.split(";");
        });
        datos.forEach((persona) => {
          console.log(persona);
        });
      };
      lector.readAsText(inputFile.files[0]);
      //console.log(lector.result);
    } else {
      alert("Selecciona un fichero válido");
    }
  });
});
