<?php

include("connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $searchTerm = $data->search;
    $filters = $data->filter;

    $searchTerm = str_replace(' ', '', $searchTerm);

    $filters = explode('&', $filters);
    foreach($filters as &$filter){
        if($filter === "none") $filter = "";
    }
    unset($filter);

        
            $sql = "SELECT * FROM products WHERE colors LIKE '%$filters[0]%' AND REPLACE(LOWER(brand), ' ', '') LIKE '%$filters[1]%' AND REPLACE(LOWER(memory), ' ', '') LIKE '%$filters[2]%';";
        

    $data = mysqli_query($connection, $sql);

    if ($data) {
        $rows = mysqli_num_rows($data);
        $products = [];

        for ($i = 0; $i < $rows; $i++) {
            $products[] = mysqli_fetch_assoc($data);
        }

        echo json_encode($products);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Database query failed']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method']);
}