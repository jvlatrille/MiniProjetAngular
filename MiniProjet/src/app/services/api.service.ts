import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jeu } from '../models/jeu.model';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // API Angular
  // private apiUrl = 'http://localhost:3000';
  // API Laravel
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  /********************************************************************/
  /*                            JEUX                                  */
  /********************************************************************/
  getJeux(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>(`${this.apiUrl}/jeu`);
  }

  getUnJeu(id: number): Observable<Jeu> {
    return this.http.get<Jeu>(`${this.apiUrl}/jeu/${id}`);
  }

  addJeu(jeu: Jeu): Observable<Jeu> {
    return this.http.post<Jeu>(`${this.apiUrl}/jeu`, jeu);
  }

  /********************************************************************/
  /*                            RESERVATIONS                          */
  /********************************************************************/
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getUneReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(
      `${this.apiUrl}/reservations`,
      reservation
    );
  }

  updateReservation(
    id: number,
    reservation: Reservation
  ): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.apiUrl}/reservations/${id}`,
      reservation
    );
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservations/${id}`);
  }
}
