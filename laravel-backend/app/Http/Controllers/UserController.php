<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request)
    {

        if (!$request->has('email') || !$request->has('password')) {
            return response()->json([
                'success' => false,
                'message' => 'Missing email or password field in request',
            ]); // Bad request
        }

        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password',
            ]);
        }

        // Generate token payload
        $tokenPayload = [
            'user_id' => $user['user_id'],
            'email' => $user->email,
            'firstName' => $user['first_name'],
            'lastName' => $user['last_name'],
            'isAdmin' => $user['is_admin'],
            'exp' => time() + (7 * 60 * 60 * 24),// Token expiration time
        ];

        $secretKey = "mysecretkey";

        function generateJWT($payload, $secretKey) {
            $header = base64_encode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
            $payload = base64_encode(json_encode($payload));
            $signature = hash_hmac('sha256', "$header.$payload", $secretKey, true);
            $encodedSignature = base64_encode($signature);
        
            return "$header.$payload.$encodedSignature";
        }

        // Generate JWT token
        $token = generateJWT($tokenPayload, $secretKey); // Replace with your JWT encoding logic

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'token' => $token,
        ]);
    }
}
