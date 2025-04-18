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
        $validatedData = $request->validate([
            'nomClient' => 'required|min:3',
            'emailClient' => 'required|email',
            'telClient' => 'required',
            'jeuClient' => 'required',
            'plateformeClient' => 'required',
            'reservationDate' => 'required|date',
            'status' => 'required|in:Confirmée,En attente,Annulée',
        ]);

        $reservation = \App\Models\Reservation::create($validatedData);

        $jeu = \App\Models\Jeu::where('titre', $reservation->jeuClient)
                ->where('plateforme', $reservation->plateformeClient)
                ->first();

        if ($jeu) {
            if ($jeu->stock > 0) {
                $jeu->stock = $jeu->stock - 1;
                $jeu->save();
            }
        }

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
            'nomClient' => 'required|min:3',
            'emailClient' => 'required|email',
            'telClient' => 'required',
            'jeuClient' => 'required',
            'plateformeClient' => 'required',
            'reservationDate' => 'required|date',
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

        $jeu = \App\Models\Jeu::where('titre', $reservation->jeuClient)
                ->where('plateforme', $reservation->plateformeClient)
                ->first();

        if ($jeu) {
            $jeu->stock = $jeu->stock + 1;
            $jeu->save();
        }

        $reservation->delete();
        return response()->json(['message' => 'Reservation supprimée']);
    }

}
