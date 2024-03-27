<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function showProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    //----------------------------------------------------------------------------------------------------

    public function searchProducts(Request $request)
    {
        if ($request->method() !== 'POST') {
            return response()->json(['error' => 'Invalid request method'], 405);
        }

        $searchTerm = $request->input('search');

        $searchTerm = str_replace(' ', '', $searchTerm);

        $products = Product::where(function ($query) use ($searchTerm) {
            $query->whereRaw("LOWER(product_name) LIKE '%$searchTerm%'")
                ->orWhereRaw("LOWER(product_description) LIKE '%$searchTerm%'");
        })->get();

        if ($products->isNotEmpty()) {
            return response()->json($products);
        } else {
            return response()->json(['message' => 'No products found for the search term'], 404);
        }
    }

    //----------------------------------------------------------------------------------------------------
    public function filterProducts(Request $request)
    {
        if ($request->method() !== 'POST') {
            return response()->json(['error' => 'Invalid request method'], 405);
        }

        $searchTerm = $request->input('search');
        $filters = explode('&', $request->input('filter'));

        foreach ($filters as &$filter) {
            if($filter === "none") $filter = "";
        }
        unset($filter);

        $query = Product::where(function ($query) use ($searchTerm, $filters) {
            $query->where(function ($query) use ($searchTerm) {
                $query->whereRaw("LOWER(product_name) LIKE '%$searchTerm%'")
                      ->orWhereRaw("LOWER(product_description) LIKE '%$searchTerm%'");
            });

            $query->whereRaw("colors LIKE '%$filters[0]%'")
                  ->whereRaw("REPLACE(LOWER(brand), ' ', '') LIKE '%$filters[1]%'")
                  ->whereRaw("REPLACE(memory, ' ', '') LIKE '%$filters[2]%'");
        });

        $products = $query->get();

        if ($products->isEmpty()) {
            return response()->json(Product::all());
        }

        return response()->json($products);
    }

    public function getProduct(Request $request, $id)
    {
        $product = Product::with('images')->find($id); // Eager load images

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
}
