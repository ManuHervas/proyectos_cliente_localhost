window.addEventListener("load", function () {
  let formulario = document.forms[0];
  //let respuestas = [];
  //let elementos = Array.from(formulario.elements);
  document.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (formulario.elements[0].value.esCadena()) {
      formulario.elements[0].classList.add("valido");
      formulario.elements[0].classList.remove("noValido");
    } else {
      formulario.elements[0].classList.add("noValido");
      formulario.elements[0].classList.remove("valido");
    }
    if (formulario.elements[1].value.esCadena()) {
      formulario.elements[1].classList.add("valido");
      formulario.elements[1].classList.remove("noValido");
    } else {
      formulario.elements[1].classList.add("noValido");
      formulario.elements[1].classList.remove("valido");
    }
    if (formulario.elements[2].value.esDNI()) {
      formulario.elements[2].classList.add("valido");
      formulario.elements[2].classList.remove("noValido");
    } else {
      formulario.elements[2].classList.add("noValido");
      formulario.elements[2].classList.remove("valido");
    }
    if (formulario.elements[3].value.esFecha()) {
      formulario.elements[3].classList.add("valido");
      formulario.elements[3].classList.remove("noValido");
    } else {
      formulario.elements[3].classList.add("noValido");
      formulario.elements[3].classList.remove("valido");
    }
  });
});
