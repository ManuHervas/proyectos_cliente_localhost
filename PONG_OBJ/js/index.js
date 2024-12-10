const tablero = document.getElementById("tablero");

class Raqueta {
  element;
  y = 0;
  velocidad = 5;
  movimiento;

  constructor() {
    this.element = document.createElement("div");
    this.element.classList = "raqueta";
    tablero.appendChild(this.element);
  }

  subir() {
      this.movimiento = setInterval(() => {        
        this.y -= this.velocidad;
        if (condition) {
          
        }
        this.element.style.top = this.y + "px";
      }, 20);
  }

  bajar() {
    this.movimiento = setInterval(() => {
      this.y += this.velocidad;
      this.element.style.top = this.y + "px";
    }, 20);
  }
}

const j1 = new Raqueta();
const j2 = new Raqueta();
