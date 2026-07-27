<?php

class Servicio
{
    public function getServicios()
    {
        return [
            "servicios" => [
                [
                    "id" => 1,
                    "title" => "Consultoría Digital",
                    "description" => "Acompañamiento estratégico para identificar oportunidades de transformación digital, optimizar procesos y definir soluciones tecnológicas alineadas con los objetivos de cada organización.",
                    "benefits" => [
                        "Diagnóstico de procesos",
                        "Hoja de ruta digital",
                        "Recomendaciones tecnológicas"
                    ]
                ],
                [
                    "id" => 2,
                    "title" => "Soluciones Multiexperiencia",
                    "description" => "Diseño y desarrollo de experiencias digitales consistentes en múltiples canales y distintos puntos de contacto con los usuarios.",
                    "benefits" => [
                        "Experiencia adaptable",
                        "Diseño centrado en el usuario",
                        "Compatibilidad multidispositivo"
                    ]
                ],
                [
                    "id" => 3,
                    "title" => "Evolución de Ecosistemas",
                    "description" => "Modernización e integración de aplicaciones, plataformas e infraestructura para asegurar la continuidad operacional y la capacidad de crecimiento.",
                    "benefits" => [
                        "Integración de sistemas",
                        "Modernización tecnológica",
                        "Escalabilidad"
                    ]
                ],
                [
                    "id" => 4,
                    "title" => "Soluciones Low-Code",
                    "description" => "Construcción ágil de aplicaciones y automatizaciones utilizando herramientas de bajo código, reduciendo tiempos de implementación.",
                    "benefits" => [
                        "Desarrollo acelerado",
                        "Automatización de procesos",
                        "Mantenimiento simplificado"
                    ]
                ]
            ]
        ];
    }
}