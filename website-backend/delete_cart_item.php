<?php

include("userdb_connection.php");

if($method == "POST"){
    $data = json_decode(file_get_contents("php://input"));
    $item_id = $data->item_id;

    $query = "DELETE FROM user_cart_items WHERE item_id = $item_id";
    mysqli_query($connection, $query);
}