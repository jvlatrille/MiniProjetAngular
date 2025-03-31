<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\JeuController;
use App\Http\Controllers\API\ReservationController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('jeu', JeuController::class);
Route::apiResource('reservations', ReservationController::class);
