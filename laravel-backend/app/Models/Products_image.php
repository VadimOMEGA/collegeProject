<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products_image extends Model
{
    protected $connection = 'mysql_products';
    protected $table = 'products_images';
    protected $primaryKey = 'image_id';
    use HasFactory;
}
