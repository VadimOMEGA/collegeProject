<?php
include("connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $searchTerm = $data->search;

    $searchTerm = str_replace(' ', '', $searchTerm);

    $sql = "SELECT * FROM products WHERE REPLACE(LOWER(product_name), ' ', '') LIKE '%$searchTerm%' OR REPLACE(LOWER(product_description), ' ', '') LIKE '%$searchTerm%';";

    $data = mysqli_query($connection, $sql);

    if ($data) {
        $rows = mysqli_num_rows($data);
        $products = [];

        for ($i = 0; $i < $rows; $i++) {
            $products[] = mysqli_fetch_assoc($data);
        }

        //header('Content-Type: application/json');
        echo json_encode($products);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Database query failed']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method']);
}