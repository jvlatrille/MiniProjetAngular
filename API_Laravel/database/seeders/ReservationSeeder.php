<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reservations')->truncate(); // Ya eu des problèmes du coup on vide la table avant de la remplir au cas où

        DB::table('reservations')->insert([
            [
                'nomClient' => 'Alice',
                'emailClient' => 'alice@example.com',
                'telClient' => '0612345678',
                'jeuClient' => 'The Legend of Zelda: Breath of the Wild',
                'plateformeClient' => 'Switch',
                'reservationDate' => '2025-05-10',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Bob',
                'emailClient' => 'bob@example.com',
                'telClient' => '0687654321',
                'jeuClient' => 'Super Mario Odyssey',
                'plateformeClient' => 'Switch',
                'reservationDate' => '2025-04-15',
                'status' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Clairezeee',
                'emailClient' => 'claire@example.com',
                'telClient' => '0698745432',
                'jeuClient' => 'God of War',
                'plateformeClient' => 'PS4',
                'reservationDate' => '2025-03-20',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'David',
                'emailClient' => 'david@example.com',
                'telClient' => '0600000001',
                'jeuClient' => 'Horizon Forbidden West',
                'plateformeClient' => 'PS5',
                'reservationDate' => '2025-06-01',
                'status' => 'Annulée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Liam',
                'emailClient' => 'liam@example.com',
                'telClient' => '0600000003',
                'jeuClient' => 'Red Dead Redemption 2',
                'plateformeClient' => 'PS4',
                'reservationDate' => '2025-06-03',
                'status' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Olivia',
                'emailClient' => 'olivia@example.com',
                'telClient' => '0600000004',
                'jeuClient' => 'Final Fantasy VII Remake',
                'plateformeClient' => 'PS4',
                'reservationDate' => '2025-06-04',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Noah',
                'emailClient' => 'noah@example.com',
                'telClient' => '0600000005',
                'jeuClient' => 'Minecraft',
                'plateformeClient' => 'PC',
                'reservationDate' => '2025-06-05',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Emma',
                'emailClient' => 'emma2@example.com',
                'telClient' => '0600000006',
                'jeuClient' => 'Fortnite',
                'plateformeClient' => 'PC',
                'reservationDate' => '2025-06-06',
                'status' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Mia',
                'emailClient' => 'mia@example.com',
                'telClient' => '0600000007',
                'jeuClient' => 'Cyberpunk 2077',
                'plateformeClient' => 'PC',
                'reservationDate' => '2025-06-07',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Lucas',
                'emailClient' => 'lucas@example.com',
                'telClient' => '0600000008',
                'jeuClient' => 'The Witcher 3: Wild Hunt',
                'plateformeClient' => 'PC',
                'reservationDate' => '2025-06-08',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Chloe',
                'emailClient' => 'chloe@example.com',
                'telClient' => '0600000009',
                'jeuClient' => 'Animal Crossing: New Horizons',
                'plateformeClient' => 'Switch',
                'reservationDate' => '2025-06-09',
                'status' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Elijah',
                'emailClient' => 'elijah@example.com',
                'telClient' => '0600000010',
                'jeuClient' => "Assassin's Creed Valhalla",
                'plateformeClient' => 'PS5',
                'reservationDate' => '2025-06-10',
                'status' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Sophie',
                'emailClient' => 'sophie@example.com',
                'telClient' => '0600000011',
                'jeuClient' => 'Resident Evil Village',
                'plateformeClient' => 'PS5',
                'reservationDate' => '2025-06-11',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'James',
                'emailClient' => 'james@example.com',
                'telClient' => '0600000012',
                'jeuClient' => 'FIFA 23',
                'plateformeClient' => 'PS5',
                'reservationDate' => '2025-06-12',
                'status' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nomClient' => 'Jules VINET LATRILLE',
                'emailClient' => 'julesvinet64@gmail.com',
                'telClient' => '0607845150',
                'jeuClient' => 'Cyberpunk 2077',
                'plateformeClient' => 'PC',
                'reservationDate' => '2005-09-20',
                'status' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
