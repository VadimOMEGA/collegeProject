<?php

include("userdb_connection.php");

if($method == "POST"){
    $data = json_decode(file_get_contents("php://input"));

    $user_id = $data->user_id;
    $product_id = $data->product_id;
    $color = $data->color;

    $query = "SELECT * FROM user_cart_items WHERE user_id = '$user_id' AND product_id = '$product_id' AND color LIKE '%$color%'";

    $result = mysqli_query($connection, $query);

    if($result){
        $fetched_items = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if(count($fetched_items) === 0){
            $query = "INSERT INTO user_cart_items (item_id, user_id, product_id, quantity, color) VALUES (null, $user_id, $product_id, 1, '$color')";
            mysqli_query($connection, $query);
            echo json_encode(['success' => true, 'message' => 'Product added to cart']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Product already exists']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Adding a new product failed']);
    }
}