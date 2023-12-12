<?php

include("connection.php");

if($method === "POST" ){
    $data = json_decode(file_get_contents("php://input"));
    $product_name = $data->product_name;
    $product_description = $data->product_description;
    $brand = $data->brand;
    $price = $data->price;
    $image_url = $data->image_url;
    $colors = $data->colors;
    $memory = $data->memory;
    $memory_variations = $data->memory_variations;
    $in_stock = $data->in_stock;
    $image1 = $data->image1;
    $image2 = $data->image2;
    $image3 = $data->image3;
    $image4 = $data->image4;

    $query = "INSERT INTO products (product_id, product_name, product_description, brand, price, image_url, colors, memory, memory_variations, in_stock)
                VALUES (null, '$product_name', '$product_description', '$brand', $price, '$image_url', '$colors', '$memory', '$memory_variations', $in_stock)";

    $result = mysqli_query($connection, $query);

    if($result){
        $newProductId = mysqli_insert_id($connection);
        $query = "INSERT INTO products_images (image_id, image_url, product_id)
                    VALUES
                        (null, '$image1', $newProductId),
                        (null, '$image2', $newProductId),
                        (null, '$image3', $newProductId),
                        (null, '$image4', $newProductId);";
        $result2 = mysqli_query($connection, $query);

        if($result2){
            echo "Creation successful!";
        } else{
            echo "Error creating record: " . mysqli_error($connection);
        }
    
    }

}

mysqli_close($connection);