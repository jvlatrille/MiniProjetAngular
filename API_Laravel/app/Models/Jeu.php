<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Jeu extends Model
{
    use HasFactory;

    protected $table = 'jeu';

    protected $fillable = [
        'titre',
        'plateforme',
        'genre',
        'developpeur',
        'date_de_sortie',
        'stock',
        'image_url',
    ];
}
