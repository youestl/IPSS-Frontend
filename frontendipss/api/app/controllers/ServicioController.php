<?php

require "../app/models/Servicio.php";

class ServicioController
{

    public function recuperarServicio()
    {
        $servicioModel = new Servicio();
        $servicios = $servicioModel->getServicios();
        header("Content-Type: application/json");
        echo json_encode([
            "message" => "Lista de servicios",
            "data" => $servicios
        ]);

    }

}