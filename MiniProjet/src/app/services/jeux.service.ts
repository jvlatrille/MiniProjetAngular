import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jeu } from '../models/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getJeux(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>(`${this.url}/jeu`);
  }

  getUnJeu(id: number): Observable<Jeu> {
    return this.http.get<Jeu>(`${this.url}/jeu/${id}`);
  } 
}
