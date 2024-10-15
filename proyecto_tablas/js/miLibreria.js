window.addEventListener("load", function () {
  let tabla = document.getElementById("t1");
  tabla.tablaEditada = false;

  tabla.addEventListener("dblclick", dobleClick);

  function dobleClick() {
    if (!tabla.tablaEditada) {
      var filas = document.querySelectorAll("tbody>tr");
      for (let i = 0; i < filas.length; i++) {
        filas[i].editada = false;
        let td = document.createElement("td");

        filas[i].classList.add("celdaEditada");
        //Boton borrar
        let boton = document.createElement("button");
        boton.innerHTML = "B";
        boton.addEventListener("click", borrarFila);
        td.appendChild(boton);
        //Boton Editar
        let botonE = document.createElement("button");
        botonE.innerHTML = "E";
        botonE.addEventListener("click", editarFila);
        td.appendChild(botonE);
        //Boton Guardar
        let botonG = document.createElement("button");
        botonG.innerHTML = "G";
        botonG.addEventListener("click", guardarFila);
        td.appendChild(botonG);
        //Cancelar Fila
        let botonC = document.createElement("button");
        botonC.innerHTML = "C";
        botonC.addEventListener("click", cancelarFila);
        td.appendChild(botonC);
        //Mover Fila
        let botonS = document.createElement("button");
        botonS.innerHTML = "↑";
        botonS.addEventListener("click", subirFila);
        td.appendChild(botonS);
        //Bajar fila
        let botonB = document.createElement("button");
        botonB.innerHTML = "↓";
        botonB.addEventListener("click", bajarFila);
        td.appendChild(botonB);

        filas[i].appendChild(td);
      }
      tabla.tablaEditada = true;
    } else {
      console.log("eee compa");

      const celdasEditadas = tabla.querySelectorAll(".celdaEditada");
      celdasEditadas.forEach((celda) => {
        celda.remove();
      });

      tabla.tablaEditada = false;
    }
  }

  function borrarFila() {
    this.parentNode.parentNode.remove();
  }

  function editarFila() {
    var fila = this.parentNode.parentNode;
    if (!fila.editada) {
      let valores = [];
      fila.editada = true;
      var celdas = fila.cells;
      var nCeldas = celdas.length;
      for (let i = 0; i < nCeldas - 1; i++) {
        let txtValor = document.createElement("input");
        txtValor.type = "text";
        txtValor.value = celdas[i].innerHTML;
        valores.push(txtValor.value);
        celdas[i].innerHTML = "";
        celdas[i].appendChild(txtValor);
      }
      fila.valoresOriginales = valores;
    }
  }

  function guardarFila() {
    var fila = this.parentNode.parentNode;
    if (fila.editada) {
      fila.editada = false;
      var celdas = fila.cells;
      var nCeldas = celdas.length;
      for (let i = 0; i < nCeldas - 1; i++) {
        let inputValue = celdas[i].firstElementChild.value;
        celdas[i].innerHTML = inputValue;
      }
    }
  }

  function cancelarFila() {
    var fila = this.parentNode.parentNode;
    if (fila.editada) {
      fila.editada = false;
      var celdas = fila.cells;
      var nCeldas = celdas.length;
      for (let i = 0; i < nCeldas - 1; i++) {
        celdas[i].innerHTML = fila.valoresOriginales[i];
      }
    }
  }

  function subirFila() {
    var fila = this.parentNode.parentNode;
    if (fila.previousElementSibling) {
      fila.parentNode.insertBefore(fila, fila.previousElementSibling);
    }
  }

  function bajarFila() {
    var fila = this.parentNode.parentNode;
    if (fila.nextElementSibling) {
      fila.parentNode.insertBefore(fila.nextElementSibling, fila);
    }
  }
});
