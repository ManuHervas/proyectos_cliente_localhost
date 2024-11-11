<?php

    $nombres = ["Silverio", "Juan", "Antonio", "Pepe"];
    if (isset($_POST["nombre"])) {
        $nombres[] = $_POST["nombre"];
    }    
    $obj = new stdClass();
    $obj->nombres = $nombres;
    echo json_encode($obj);

?>