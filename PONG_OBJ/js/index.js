const container = document.getElementById("container");
const canvas = document.getElementById("tablero");

class Pelota {
  element;
  x = 0;
  y = 0;
  ancho = 30;
  dx = -10;
  dy = -10;
  movimiento;

  constructor() {
    this.element = document.createElement("div");
    this.element.classList = "pelota";
    container.appendChild(this.element);
    this.resetPosition();
    this.moverPelota();
  }

  resetPosition() {
    this.x = canvas.width / 2;
    this.element.style.left = this.x + "px";
    this.y = canvas.height / 2;
    this.element.style.top = this.y + "px";
  }

  moverPelota() {
    if (!this.movimiento) {
      this.movimiento = setInterval(() => {
        //movimiento horizontal
        this.x += this.dx;

        if (
          this.x < 0 + j1.ancho &&
          this.y + this.ancho / 2 > j1.y &&
          this.y + this.ancho / 2 < j1.y + j1.alto
        ) {
          this.dx = this.dx * -1;
        }

        if (
          this.x + this.ancho > canvas.width - j2.ancho &&
          this.y + this.ancho / 2 > j2.y &&
          this.y + this.ancho / 2 < j2.y + j2.alto
        ) {
          this.dx = this.dx * -1;
        }

        //Meter punto
        if (this.x < 0 || this.x > canvas.width - this.ancho) {
          this.resetPosition();
        }
        this.element.style.left = this.x + "px";

        //Movimiento vertical
        this.y += this.dy;
        if (this.y < 0 || this.y > canvas.height - this.ancho) {
          this.dy = this.dy * -1;
          console.log(this.dy);
        }
        this.element.style.top = this.y + "px";
      }, 20);
    }
  }
}

window.addEventListener("load", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Raqueta {
  element;
  y = 0;
  velocidad = 10;
  movimiento;
  ancho = 20;
  alto = 140;

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
const pelota = new Pelota(800, 400);

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
