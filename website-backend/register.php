<?php

include('userdb_connection.php');
if ($method == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $email = $data->email;
    $first_name = $data->first_name;
    $last_name = $data->last_name;
    $password = password_hash($data->password, PASSWORD_DEFAULT);

    // Perform basic validation (you should add more)
    if (empty($email) || empty($data->password) || empty($first_name) || empty($last_name)) {
        echo json_encode(['success' => false, 'message' => 'Fill in all the fields']);
        exit;
    }

    $redundand_emails = [];
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $email_search_result = mysqli_query($connection, $sql);
    while ($row=mysqli_fetch_row($email_search_result)) {
        $redundand_emails[] = $row;
    }

    if(count($redundand_emails) > 0){
        echo json_encode(['success' => false, 'message' => 'Email already exists']);
        exit;
    }

    $insertQuery = "INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `password`, `email`, `is_admin`) VALUES (NULL, '$first_name', '$last_name', '$password', '$email', 0);";
    $insertResult = mysqli_query($connection, $insertQuery);
    // Check if the username already exists
    if ($insertResult) {
        // Check if any row was affected
        if (mysqli_affected_rows($connection) > 0) {
            // Registration successful, now create a token
            $isAdmin = 0; // You may set a default value for isAdmin here
            $tokenPayload = [
                'user_id' => mysqli_insert_id($connection),
                'email' => $email,
                'firstName' => $first_name,
                'lastName' => $last_name,
                'isAdmin' => $isAdmin,
                'exp' => time() + (7 * 60 * 60 * 24),  // Token expiration time
            ];

            $token = generateJWT($tokenPayload, $secretKey);

            // Use $token as your JWT
            echo json_encode(['success' => true, 'message' => 'Registration successful', 'token' => $token]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Error registering user']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Error registering user']);
    }
}