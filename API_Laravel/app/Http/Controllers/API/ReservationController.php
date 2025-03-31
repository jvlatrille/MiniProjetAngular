<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Reservation::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nom_client' => 'required|min:3',
            'email_client' => 'required|email',
            'tel_client' => 'required',
            'jeu_client' => 'required',
            'plateforme_client' => 'required',
            'reservation_date' => 'required|date',
            'status' => 'required|in:Confirmée,En attente,Annulée',
        ]);
        $reservation = Reservation::create($data);
        return response()->json($reservation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation = Reservation::find($id);
        if (!$reservation) {
            return response()->json(['message' => 'Reservation non trouvée'], 404);
        }
        return response()->json($reservation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $reservation = Reservation::find($id);
        if (!$reservation) {
            return response()->json(['message' => 'Reservation non trouvée'], 404);
        }
        $data = $request->validate([
            'nom_client' => 'required|min:3',
            'email_client' => 'required|email',
            'tel_client' => 'required',
            'jeu_client' => 'required',
            'plateforme_client' => 'required',
            'reservation_date' => 'required|date',
            'status' => 'required|in:Confirmée,En attente,Annulée',
        ]);
        $reservation->update($data);
        return response()->json($reservation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservation = Reservation::find($id);
        if (!$reservation) {
            return response()->json(['message' => 'Reservation non trouvée'], 404);
        }
        $reservation->delete();
        return response()->json(['message' => 'Reservation supprimée']);
    }
}
