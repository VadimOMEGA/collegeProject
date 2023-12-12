<?php
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "users_database";
    $connection = mysqli_connect($hostname, $username, $password) or die ("Couldn't connect to the database");
    mysqli_select_db($connection, $database) or die ("Database not found");

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header('Content-Type: application/json');
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
        header("HTTP/1.1 200 OK");
        die();
    }

    $secretKey = "mysecretkey";

    function generateJWT($payload, $secretKey) {
        $header = base64_encode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
        $payload = base64_encode(json_encode($payload));
        $signature = hash_hmac('sha256', "$header.$payload", $secretKey, true);
        $encodedSignature = base64_encode($signature);
    
        return "$header.$payload.$encodedSignature";
    }
?>