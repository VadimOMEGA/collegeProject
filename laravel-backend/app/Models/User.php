<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    protected $connection = 'mysql_users';
    protected $hidden = [
        'password',
    ];

    protected $table = 'users';
    protected $primaryKey = 'user_id';
    use HasFactory;

    /**
     * Get the JWT identifier.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Get the JWT custom claims.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [
            'email' => $this->email,
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            'isAdmin' => $this->is_admin,
            'exp' => time() + (7 * 60 * 60 * 24), // Token expiration time
        ];
    }
}
