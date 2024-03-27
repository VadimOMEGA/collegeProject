<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Product;

class Products_image extends Model
{
    protected $connection = 'mysql_products';
    protected $table = 'products_images';
    protected $primaryKey = 'image_id';
    use HasFactory;

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
