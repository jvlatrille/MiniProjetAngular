import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  // private urlAngular = 'http://localhost:3000';
  private urlLaravel = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.urlLaravel}/reservations`);
  }

  getUneReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.urlLaravel}/reservations/${id}`);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.urlLaravel}/reservations`, reservation);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.urlLaravel}/reservations/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlLaravel}/reservations/${id}`);
  }
}
