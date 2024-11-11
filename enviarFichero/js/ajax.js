window.addEventListener("load", function(){
    var form = document.forms[0];
    var fichero = form.elements["fichero"];
    form.elements["enviar"].addEventListener("click", function(){
        var datos = new FormData(form);
        datos.append("nombre", "KEBAB DE LA CASA");
        datos.append("ingredientes", "12,2,23,123,14");

        var solicitud = new Request("info.php", {
            method:"POST",
            body: datos,            
        });
        fetch(solicitud).then(respuesta=>respuesta.text())
        .then(texto=>{document.getElementById("contenedor").innerHTML=texto});
    });
});