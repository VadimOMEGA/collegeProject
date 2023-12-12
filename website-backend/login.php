<?php

include("userdb_connection.php");

if ($method == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $email = $data->email;
    $password = $data->password;

    // Perform validation and check if the user exists
    $checkQuery = "SELECT * FROM users WHERE email = '$email'";
    $checkResult = mysqli_query($connection, $checkQuery);

    if (mysqli_num_rows($checkResult) > 0) {
        $user = mysqli_fetch_assoc($checkResult);

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Password is correct, generate a token
            $tokenPayload = [
                'user_id' => $user['user_id'],
                'email' => $user['email'],
                'firstName' => $user['first_name'],
                'lastName' => $user['last_name'],
                'isAdmin' => $user['is_admin'],
                'exp' => time() + (7 * 60 * 60 * 24),  // Token expiration time
            ];

            $token = generateJWT($tokenPayload, $secretKey);

            // Return the token to the client
            echo json_encode(['success' => true, 'message' => 'Login successful', 'token' => $token]);
        } else {
            // Password is incorrect
            echo json_encode(['success' => false, 'message' => 'Incorrect password']);
        }
    } else {
        // User not found
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
}