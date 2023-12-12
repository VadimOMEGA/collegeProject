<?php

include("connection.php");

$data = json_decode(file_get_contents("php://input"));
$product_id = $data->product_id;
$product_name = $data->product_name;
$product_description = $data->product_description;
$brand = $data->brand;
$price = $data->price;
$image_url = $data->image_url;
$colors = $data->colors;
$memory = $data->memory;
$memory_variations = $data->memory_variations;
$in_stock = $data->in_stock;

$query = "UPDATE products SET
            product_name = '$product_name',
            product_description = '$product_description',
            brand = '$brand',
            price = $price,
            image_url = '$image_url',
            colors = '$colors',
            memory = '$memory',
            memory_variations = '$memory_variations',
            in_stock = $in_stock
          WHERE product_id = $product_id";

$result = mysqli_query($connection, $query);

if ($result) {
    echo "Update successful!";
} else {
    echo "Error updating record: " . mysqli_error($connection);
}

mysqli_close($connection);