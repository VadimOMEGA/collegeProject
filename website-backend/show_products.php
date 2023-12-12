<?php
    include("connection.php");

    ob_clean();
    $sql = "SELECT * FROM products";

    $data = mysqli_query($connection, $sql);
    $rows = mysqli_num_rows($data);

    for ($i = 0; $i < $rows; $i++) {
        $products[] = mysqli_fetch_assoc($data);
    }

    echo json_encode($products);

    mysqli_close($connection);
?>