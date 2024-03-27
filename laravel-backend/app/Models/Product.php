<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Products_image;

class Product extends Model
{
    protected $connection = 'mysql_products';
    protected $table = 'products';
    protected $primaryKey = 'product_id';
    protected $fillable = [
        'product_name',
        'product_description',
        'brand',
        'price',
        'image_url',
        'colors',
        'memory',
        'memory_variations',
        'in_stock'
    ];
    use HasFactory;

    public function images()
    {
        return $this->hasMany(Products_image::class, 'product_id');
    }
}
