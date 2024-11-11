window.addEventListener("load", function(){

    document.forms[0].elements[1].onclick= function(ev){
        ev.preventDefault();
        var peticion = new Request("api.php",
            {
                method: "POST",
                body: new FormData(document.forms[0])

            });
            fetch(peticion)
                .then(respuesta=>respuesta.text())
                .then(texto=>{alert(texto)});
    };
})

