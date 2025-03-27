import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  // constructor() { }

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les réservations (GET /reservations)
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/reservations`);
  }

  // Récupérer une réservation par son id (GET /reservations/:id)
  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/reservations/${id}`);
  }

  // Ajouter une nouvelle réservation (POST /reservations)
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/reservations`, reservation);
  }

  // Mettre à jour une réservation existante (PUT /reservations/:id)
  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.baseUrl}/reservations/${id}`, reservation);
  }

  // Supprimer une réservation (DELETE /reservations/:id)
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/reservations/${id}`);
  }
}
