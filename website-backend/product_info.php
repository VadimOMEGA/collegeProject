<?php

include("connection.php");

if($method === "POST"){
    $data = json_decode(file_get_contents("php://input"));
    $product_id = $data->product_id;

    $query = "SELECT * FROM products WHERE product_id = $product_id";
    $products_result = mysqli_query($connection, $query);
    $products = mysqli_fetch_all($products_result, MYSQLI_ASSOC);

    $query = "SELECT * FROM products_images WHERE product_id = $product_id";
    $images_result = mysqli_query($connection, $query);
    $images = mysqli_fetch_all($images_result, MYSQLI_ASSOC);

    foreach($images as $image){
        $products['images'][] = $image['image_url'];
    }

    echo json_encode($products);


    mysqli_query($connection, $query);
}