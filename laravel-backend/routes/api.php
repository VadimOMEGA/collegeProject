<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

Route::get('/products', [ProductController::class, 'showProducts']);
Route::match(['get', 'post'], '/product-search', [ProductController::class, 'searchProducts'])->name('products.search');
Route::match(['get', 'post'], '/product-filter', [ProductController::class, 'filterProducts'])->name('products.filter');
Route::get('/products/{id}', [ProductController::class, 'getProduct']);


Route::match(['get', 'post'], '/login', [UserController::class, 'login']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
