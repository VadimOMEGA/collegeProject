<?php

include("userdb_connection.php");

if($method == "POST"){
    $data = json_decode(file_get_contents("php://input"));
    $quantity = $data->quantity;
    $item_id = $data->item_id;

    $query = "UPDATE user_cart_items SET quantity = $quantity WHERE item_id = $item_id";
    mysqli_query($connection, $query);

    echo "Error in user query: " . mysqli_error($connection) . "<br>";
}