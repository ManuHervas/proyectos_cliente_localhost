//Creamos un listener para cuando se carga la ventana
window.addEventListener("load", function () {
  const container = document.getElementById("container");
  const buttons = container.getElementsByTagName("span");

  document.addEventListener("keydown", function (evento) {
    if (evento.ctrlKey && evento.key == "p") {
      evento.preventDefault();
      crear();
    }
  });

  buttons[0].addEventListener("click", crear());

  buttons[1].addEventListener("click", function () {
    container.removeChild(container.lastElementChild);
  });

  function crear() {
    let p = document.createElement("p");
    p.innerHTML = "Hola compare";
    p.addEventListener("dblclick", function () {
      this.parentElement.removeChild(this);
    });

    container.appendChild(p);
  }
});
