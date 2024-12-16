window.addEventListener("load", function () {
  const ctx = document.getElementById("myChart");
  window.setInterval(function () {
    traerVentas().then((datos) => {
      let labels = [];
      let data = [];
      datos.forEach((item) => {
        labels.push(item.nombre);
        data.push(item.cantidad);
      });

      ctx.grafico = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Unidades vendidas",
              data: data,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        },
      });
    });
  });
});

window.setInterval(function () {
  traerVentas()
    .then((datos) => {
      let labels = [];
      let data = [];
      datos.forEach((item) => {
        labels.push(item.nombre);
        data.push(item.cantidad);
      });
    })
    .catch((error) => {
      console.error("Error al traer datos:", error);
    });
}, 2000);
