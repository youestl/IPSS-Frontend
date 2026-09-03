<?php

require "../app/models/Nosotros.php";

class NosotrosController
{

    public function recuperarAboutus()
    {
        $nosotrosModel = new nosotros();
        $nosotros= $nosotrosModel->getAboutus();
        header("Content-Type: application/json");
        echo json_encode([
            "message" => "Lista de servicios",
            "data" => $nosotros
        ]);

    }

}