<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_client',
        'email_client',
        'tel_client',
        'jeu_client',
        'plateforme_client',
        'reservation_date',
        'status',
    ];
}
