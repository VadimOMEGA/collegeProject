<?php

include("userdb_connection.php");

$hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "products_database";
    $products_connection = mysqli_connect($hostname, $username, $password) or die ("Couldn't connect to the database");
    mysqli_select_db($products_connection, $database) or die ("Database not found");

    if($method == "POST"){
        $data = json_decode(file_get_contents("php://input"));
        
        $user_id = $data->user_id;
        // Query to get cart items for the user from the user database
        $user_query = "SELECT * FROM user_cart_items WHERE user_id = $user_id";
    
        // Query to get product details from the products database
        $products_query = "SELECT * FROM products";
    
        // Perform queries
        $user_result = mysqli_query($connection, $user_query);
        $products_result = mysqli_query($products_connection, $products_query);
    
        if ($user_result && $products_result) {
            // Process the results
            $cart_items = mysqli_fetch_all($user_result, MYSQLI_ASSOC);
            $product_details = mysqli_fetch_all($products_result, MYSQLI_ASSOC);
    
            // Combine the data based on product_id
            $combined_data = [];
    
            foreach ($cart_items as $item) {
                foreach ($product_details as $product) {
                   if($item['product_id'] == $product['product_id']) {
                    $product['quantity'] = $item['quantity'];
                    $product['item_id'] = $item['item_id'];
                    $product['color'] = $item['color'];
                    $combined_data[] = $product;
                   }
                }
            }
    
            // Output or further process $combined_data
           echo json_encode($combined_data);
        } else {
            // Handle query errors
            echo "Error in user query: " . mysqli_error($connection) . "<br>";
            echo "Error in products query: " . mysqli_error($products_connection);
        }
    
        // Close the database connections
        mysqli_close($connection);
        mysqli_close($products_connection);
    }


    
    ?>