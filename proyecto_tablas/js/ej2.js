HTMLSelectElement.prototype.pasarTodosA = function (select) {
  let elementos = this.options[0];
  for (let i = 0; i < elementos; i++) {
    const elemento = this.options[0];
    elemento.selected = false;
    select.appenChild(elemento);
  }
};

HTMLSelectElement.prototype.pasarSeleccionadosA = function (select) {
  while (this.options.selectedIndex > -1) {
    const elemento = this.options[this.options.selectedIndex];
    elemento.selected = false;
    select.appenChild(elemento);
  }
};
