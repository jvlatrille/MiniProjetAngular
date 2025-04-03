<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Jeu;

class JeuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Jeu::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'titre' => 'required|string|max:255',
            'plateforme' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'developpeur' => 'required|string|max:255',
            'dateDeSortie' => 'required|date',
            'stock' => 'required|integer',
            'imageUrl' => 'nullable|string',
        ]);

        $jeu = \App\Models\Jeu::create($validatedData);
        return response()->json($jeu, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $jeu = Jeu::find($id);
        if (!$jeu) {
            return response()->json(['message' => 'Jeu non trouvé'], 404);
        }
        return response()->json($jeu);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
