window.addEventListener("load", function () {
  var canvas = document.getElementById("tablero");
  var ctx = canvas.getContext("2d");
  var pelota = [200, 200, 20];
  canvas.pelota = pelota;
  canvas.ctx = ctx;
  canvas.angulo = 210;
  canvas.velocidad = 10;

  canvas.temporizadorPelota = setInterval(function () {
    var canvas = document.getElementById("tablero");
    canvas.img = document.createElement("img");
    canvas.img.src = "sunshinee.png";
    var anguloRadianes = (2 * Math.PI * canvas.angulo) / 360;
    canvas.pelota[0] += canvas.velocidad * Math.cos(anguloRadianes);
    canvas.pelota[1] -= canvas.velocidad * Math.sin(anguloRadianes);
    if (
      canvas.pelota[0] - canvas.pelota[2] <= 0 ||
      canvas.pelota[0] + canvas.pelota[2] >= 1024
    ) {
      canvas.angulo = 180 - canvas.angulo;
    }
    if (
      canvas.pelota[1] - canvas.pelota[2] <= 0 ||
      canvas.pelota[1] + canvas.pelota[2] >= 768
    ) {
      canvas.angulo = 360 - canvas.angulo;
    }
    if (canvas.angulo < 0) {
      canvas.angulo += 360;
    }
  }, 30);
  canvas.temporizador = setInterval(function () {
    canvas.ctx.clearRect(0, 0, 1024, 768);
    pintarPelota(canvas.pelota, canvas.ctx, canvas.img);
  });
});

window.addEventListener("keydown", function (ev) {
  var velocidad = 2;
  if (ev.shiftKey) {
    velocidad = 6;
  }
  switch (ev.code) {
    case "ArrowRight":
      if (pelota[0] + velocidad < 1004) {
        pelota[0] += velocidad;
      }
      break;
    case "ArrowLeft":
      pelota[0] -= 2;
      break;
    case "ArrowUp":
      pelota[1] -= 2;
      break;
    case "ArrowDown":
      pelota[1] += 2;
      break;
    default:
      break;
  }
});

function pintarPelota(pelota, ctx, img) {
  ctx.beginPath();
  ctx.drawImage(img, pelota[0] - 30, pelota[1] - 30);
  //ctx.arc(pelota[0], pelota[1], pelota[2], 0, 2 * Math.PI);
  ctx.stroke();
}
