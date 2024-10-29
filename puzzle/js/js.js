window.addEventListener("load", function () {
  const posiciones = [
    "0px 0px",
    "-85px 0px",
    "-170px 0px",
    "-255px 0px",
    "0px -77.5px",
    "-85px -77.5px",
    "-170px -77.5px",
    "-255px -77.5px",
    "0px -155px",
    "-85px -155px",
    "-170px -155px",
    "-255px -155px",
    "0px -232.5px",
    "-85px -232.5px",
    "-170px -232.5px",
    "-255px -232.5px",
  ];
  posiciones.sort(() => Math.random() - 0.5);
  const celdas = document.querySelectorAll("#tabla td");

  celdas.forEach((celda, index) => {
    celda.style.backgroundPosition = posiciones[index];
  });
  var imgs = this.document.querySelectorAll("img.puzzle");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dblclick", programarPuzzle);
  }

  const div = document.getElementById("contenedor");
  if (div) {
    div.addEventListener("dblclick", function () {
      div.style.display = "none";
      const img = document.images[0];
      img.style.display = "inline-block";
    });
  } else {
    console.error("Elemento con id 'contenedor' no encontrado.");
  }
});
//cada div de la tabla tiene una parte a través de los pixeles de la imagen ej: si la imagen tiene 340px y 310px tendriamos que dividirlo entre 4
//
function programarPuzzle() {
  imgWidth = document.images[0].width;
  const img = document.images[0];
  imgHeigth = document.images[0].height;
  const div = document.getElementById("contenedor");
  div.style.backgroundColor = "orange";
  div.style.width = imgWidth + "px";
  div.style.height = imgHeigth + "px";
  div.style.display = "inline-block";

  img.parentElement.insertBefore(div, img);
  img.style.display = "none";
}
