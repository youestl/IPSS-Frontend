<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Content-Type: application/json");

require "../app/core/Router.php";

$url = $_SERVER["REQUEST_URI"];

$router = new Router();

$router->handle($url);