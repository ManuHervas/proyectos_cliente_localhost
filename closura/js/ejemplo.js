window.addEventListener("load", function () {
  var trs = document.getElementsByTagName("tr");
  for (let i = 0; i < array.length; i++) {
    trs[i].addEventListener(
      "click",
      (function programarPulsacion(fila) {
        return function () {
          alert(index + "->>>" + fila.innerHTML);
        };
      })(trs[i], i)
    );
  }
});
