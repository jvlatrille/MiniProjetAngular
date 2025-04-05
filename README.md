# MiniProjetAngular

## Lancer le Frontend (Angular)

1. **Installer les dépendances**  
   Depuis le dossier du projet Angular (ex : `MiniProjet`), lancer :
   ```bash
   npm install
   ```

2. **Lancer le serveur Angular**  
   ```bash
   ng serve
   ```
---

## Choix de l'API

- **Changer l'URL de l'API** :  
  Dans le fichier `MiniProjet/src/app/services/api.service.ts`, commentez / décommentez la ligne de l'API que vous souhaitez :
  ```typescript
  // API Angular
  // private api = 'http://localhost:3000';
  // API Laravel
  private api = 'http://127.0.0.1:8000/api';
  ```
  
---

## Lancer le Backend avec l'API Laravel

1. **Configurer la base de données**  
   Dans le fichier `.env` du dossier `API_Laravel`, modifiez les paramètres DB selon votre configuration.
   (le fichier `.env` doit être créé en renommant le fichier `.env.example` en `.env` )
   Voici un exemple :
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=api_laravel
   DB_USERNAME=root
   DB_PASSWORD=
   ```

2. **Installer les dépendances**  
   Depuis le dossier du projet Angular (ex : `MiniProjet`), lancer :
   ```bash
   npm install
   composer install
   ```
   
3. **Migrer et Seeder la base**  
   Depuis le dossier `API_Laravel` :
   ```bash
   php artisan migrate:fresh --seed   
   ```

4. **Lancer le serveur Laravel**  
   ```bash
   php artisan serve
   ```

---

## Lancer le Backend avec l'API Angulat
1. **Installer les dépendances**  
   Depuis le dossier racine, lancer :
   ```bash
   npm install
   ```
   Et ensuite, executer la commande : 
   ```json-server --watch BD/bd.json```
