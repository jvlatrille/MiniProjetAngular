import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jeu } from '../models/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  // private urlAngular = 'http://localhost:3000';
  private urlLaravel = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getJeux(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>(`${this.urlLaravel}/jeu`);
  }

  getUnJeu(id: number): Observable<Jeu> {
    return this.http.get<Jeu>(`${this.urlLaravel}/jeu/${id}`);
  } 
}
