import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jeu } from '../models/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {
  
  //  constructor() { }

  // URL de base pour JSON Server
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getJeux(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>(`${this.baseUrl}/jeu`);
  }

  // Récupérer un jeu par son id (GET /jeu/:id)
  getJeu(id: number): Observable<Jeu> {
    return this.http.get<Jeu>(`${this.baseUrl}/jeu/${id}`);
  } 
}
