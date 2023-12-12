<?php

include("connection.php");

$hostname = "localhost";
$username = "root";
$password = "";
$database = "users_database";
$connection_users = mysqli_connect($hostname, $username, $password) or die ("Couldn't connect to the database");
    mysqli_select_db($connection_users, $database) or die ("Database not found");

if($method == "POST"){
    $data = json_decode(file_get_contents("php://input"));
    $product_id = $data->product_id;

    $query = "DELETE FROM products WHERE product_id = $product_id";
    mysqli_query($connection, $query);

    $query = "DELETE FROM user_cart_items WHERE product_id = $product_id";
    mysqli_query($connection_users, $query);
}