<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $connection = 'mysql_products';
    protected $table = 'products';
    protected $primaryKey = 'product_id';
    use HasFactory;
}
