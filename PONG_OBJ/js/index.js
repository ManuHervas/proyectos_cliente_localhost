const container = document.getElementById("container");
const canvas = document.getElementById("tablero");

window.addEventListener("load", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Raqueta {
  element;
  y = 0;
  velocidad = 10;
  movimiento;

  constructor(yPosInicial) {
    this.element = document.createElement("div");
    this.element.classList = "raqueta";
    this.y = yPosInicial;
    this.element.style.top = this.y + "px";
    container.appendChild(this.element);
  }

  subir() {
    this.parar();
    this.movimiento = setInterval(() => {
      this.y -= this.velocidad;
      if (this.y < 0) {
        this.y = 0;
        this.parar();
      }
      this.element.style.top = this.y + "px";
    }, 20);
  }

  bajar() {
    this.parar();
    this.movimiento = setInterval(() => {
      this.y += this.velocidad;
      const limite = container.offsetHeight - this.element.offsetHeight;
      if (this.y > limite) {
        this.y = limite;
        this.parar();
      }
      this.element.style.top = this.y + "px";
    }, 20);
  }

  parar() {
    clearInterval(this.movimiento);
  }

  parar() {
    clearInterval(this.movimiento);
  }
}

const j1 = new Raqueta(50);
const j2 = new Raqueta(600);

// Movimiento de las raquetas
document.addEventListener("keydown", (ev) => {
  switch (ev.code) {
    case "ArrowUp":
      j2.subir();
      break;
    case "ArrowDown":
      j2.bajar();
      break;
    case "KeyW":
      j1.subir();
      break;
    case "KeyS":
      j1.bajar();
      break;
  }
});

document.addEventListener("keyup", (ev) => {
  switch (ev.code) {
    case "ArrowUp":
    case "ArrowDown":
      j2.parar();
      break;
    case "KeyW":
    case "KeyS":
      j1.parar();
      break;
  }
});
