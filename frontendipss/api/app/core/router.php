<?php

require_once "../app/controllers/ServicioController.php";
require_once "../app/controllers/NosotrosController.php";

class Router
{
    public function handle($url)
    {
        $metodo = $_SERVER['REQUEST_METHOD'];
        $path = strtok($url, '?'); 

 
        switch ($path) {
            case '/frontendipss/api/public/about-us':
            case '/frontendipss/api/public/nosotros':
            case '/frontendipss/api/public/about-us/':
                $controller = new NosotrosController();
                $controller->recuperarAboutus();
                break;

            case '/frontendipss/api/public/services':
            case '/frontendipss/api/public/servicios':
            case '/frontendipss/api/public/services/':
                $controller = new ServicioController();
                $controller->recuperarServicio();
                break;

            default:
                http_response_code(404);
                echo json_encode([
                    "status" => "error",
                    "message" => "Ruta no encontrada",
                    "ruta_recibida" => $path
                ], JSON_UNESCAPED_UNICODE);
                break;
        }
    }
}



