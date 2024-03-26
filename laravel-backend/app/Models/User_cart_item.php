<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_cart_item extends Model
{
    protected $connection = 'mysql_users';
    protected $table = 'user_cart_items';
    protected $primaryKey = 'item_id';
    use HasFactory;
}
