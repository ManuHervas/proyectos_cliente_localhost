window.addEventListener("load", function(){
    const btnMas = document.getElementById("mas");
    //Cuando pulsamos el boton llamamos a traer nombres
    btnMas.addEventListener("click", traerNombres);

    function traerNombres(){
        const nombre = document.getElementById("nombre").value;
        if (nombre!="") {
          //Creamos una peticion
            var formulario = new FormData();
            //Le declaramos el nombre que va a tener el metodo post y el valor 
            formulario.append("nombre", nombre);
            var peticion = new Request("php/api1.php",
                {
                    method : "POST",
                    body: formulario,
                });  
        }else{
            //Creamos una peticion
        var peticion = new Request("php/api1.php",
            {
                method : "get"
            }
        );    
        }
        
        //cuando tenemos los datos los procesamos en un json los utilizamos
        fetch(peticion)
            .then(respuesta=>respuesta.json())
            .then(json=>{
                const tbody = document.getElementById("nombres");
                json.nombres.forEach(element => {
                    var tr = document.createElement("tr");
                    var td = document.createElement("td");

                    td.innerHTML = element;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                });
            });
    }

});


