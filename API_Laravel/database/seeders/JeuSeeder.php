<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class JeuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('jeu')->truncate(); // Ya eu des problèmes du coup on vide la table avant de la remplir au cas où

        DB::table('jeu')->insert([
            [
            'titre' => "The Legend of Zelda: Breath of the Wild",
            'plateforme' => "Switch",
            'genre' => "Aventure",
            'developpeur' => "Nintendo",
            'dateDeSortie' => "2017-03-03",
            'stock' => 5,
            'imageUrl' => "https://m.media-amazon.com/images/I/91jvZUxquKL._AC_UF1000,1000_QL80_.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Super Mario Odyssey",
            'plateforme' => "Switch",
            'genre' => "Plateforme",
            'developpeur' => "Nintendo",
            'dateDeSortie' => "2017-10-27",
            'stock' => 3,
            'imageUrl' => "https://m.media-amazon.com/images/I/91SF0Tzmv4L.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "God of War",
            'plateforme' => "PS4",
            'genre' => "Action",
            'developpeur' => "Santa Monica Studio",
            'dateDeSortie' => "2018-04-20",
            'stock' => 10,
            'imageUrl' => "https://m.media-amazon.com/images/I/613lyxBIXoL._AC_UF1000,1000_QL80_.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Horizon Forbidden West",
            'plateforme' => "PS5",
            'genre' => "Action-RPG",
            'developpeur' => "Guerrilla Games",
            'dateDeSortie' => "2022-02-18",
            'stock' => 8,
            'imageUrl' => "https://m.media-amazon.com/images/I/81MKgl8cZEL._AC_UF1000,1000_QL80_.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Halo Infinite",
            'plateforme' => "Xbox Series X",
            'genre' => "FPS",
            'developpeur' => "343 Industries",
            'dateDeSortie' => "2021-12-08",
            'stock' => 4,
            'imageUrl' => "https://m.media-amazon.com/images/I/81nWynmiDPL._AC_UF1000,1000_QL80_.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Red Dead Redemption 2",
            'plateforme' => "PS4",
            'genre' => "Action-aventure",
            'developpeur' => "Rockstar Games",
            'dateDeSortie' => "2018-10-26",
            'stock' => 6,
            'imageUrl' => "https://m.media-amazon.com/images/I/81dKP+iFloL.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Final Fantasy VII Remake",
            'plateforme' => "PS4",
            'genre' => "RPG",
            'developpeur' => "Square Enix",
            'dateDeSortie' => "2020-04-10",
            'stock' => 7,
            'imageUrl' => "https://m.media-amazon.com/images/I/61USGE74bxL.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Minecraft",
            'plateforme' => "PC",
            'genre' => "Sandbox",
            'developpeur' => "Mojang",
            'dateDeSortie' => "2011-11-18",
            'stock' => 20,
            'imageUrl' => "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Fortnite",
            'plateforme' => "PC",
            'genre' => "Battle Royale",
            'developpeur' => "Epic Games",
            'dateDeSortie' => "2017-07-25",
            'stock' => 15,
            'imageUrl' => "https://image.api.playstation.com/vulcan/ap/rnd/202502/1417/aae4af6a4b9105f64b31bfc176f3e492f8692b204b508865.png",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Cyberpunk 2077",
            'plateforme' => "PC",
            'genre' => "RPG",
            'developpeur' => "CD Projekt Red",
            'dateDeSortie' => "2020-12-10",
            'stock' => 9,
            'imageUrl' => "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "The Witcher 3: Wild Hunt",
            'plateforme' => "PC",
            'genre' => "RPG",
            'developpeur' => "CD Projekt Red",
            'dateDeSortie' => "2015-05-18",
            'stock' => 12,
            'imageUrl' => "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Animal Crossing: New Horizons",
            'plateforme' => "Switch",
            'genre' => "Simulation",
            'developpeur' => "Nintendo",
            'dateDeSortie' => "2020-03-20",
            'stock' => 8,
            'imageUrl' => "https://m.media-amazon.com/images/I/81s8etnYPrL.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Assassin's Creed Valhalla",
            'plateforme' => "PS5",
            'genre' => "Action-RPG",
            'developpeur' => "Ubisoft",
            'dateDeSortie' => "2020-11-10",
            'stock' => 5,
            'imageUrl' => "https://m.media-amazon.com/images/I/81qtLu-WE0L.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "Resident Evil Village",
            'plateforme' => "PS5",
            'genre' => "Survival horror",
            'developpeur' => "Capcom",
            'dateDeSortie' => "2021-05-07",
            'stock' => 6,
            'imageUrl' => "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
            'titre' => "FIFA 23",
            'plateforme' => "PS5",
            'genre' => "Sports",
            'developpeur' => "EA Sports",
            'dateDeSortie' => "2022-09-30",
            'stock' => 10,
            'imageUrl' => "https://m.media-amazon.com/images/I/71csLBQPRuL._AC_UF1000,1000_QL80_.jpg",
            'created_at' => now(),
            'updated_at' => now(),
            ],
            [
                'titre' => "Super Mario Galaxy",
                'plateforme' => "Wii",
                'genre' => "Plateforme",
                'developpeur' => "Nintendo",
                'dateDeSortie' => "2007-11-12",
                'stock' => 10,
                'imageUrl' => "https://m.media-amazon.com/images/I/81FduhCXYdL.jpg",
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
