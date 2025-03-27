import { Component } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/reservation.model';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservations-list',
  standalone: false,
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.scss',
})
export class ReservationsListComponent {
  reservations: Reservation[] = [];
  editingReservation: Reservation | null = null;
  filteredReservations: Reservation[] = [];
  searchControl: FormControl = new FormControl('');
  subscription: Subscription = new Subscription();

  constructor(
    private reservationsService: ReservationsService,
  ) {}

  ngOnInit(): void {
    this.loadReservations();
    this.subscription.add(
      this.searchControl.valueChanges.subscribe(searchText => {
        this.filteredReservations = this.reservations.filter(r =>
          r.nomClient.toLowerCase().includes(searchText.toLowerCase()) ||
          r.jeuClient.toLowerCase().includes(searchText.toLowerCase()) ||
          r.status.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  loadReservations(): void {
    this.reservationsService.getReservations().subscribe(data => {
      this.reservations = data;
      this.filteredReservations = data;
    });
  }

  // Méthodes pour l'édition inline (voir le point précédent)
  startEditing(reservation: Reservation): void {
    if (reservation.status === 'Confirmée') {
      alert("Cette réservation est confirmée et ne peut pas être modifiée.");
      return;
    }
    this.editingReservation = { ...reservation };
  }

  cancelEditing(): void {
    this.editingReservation = null;
  }

  saveEditing(): void {
    if (this.editingReservation) {
      this.reservationsService
        .updateReservation(this.editingReservation.id!, this.editingReservation)
        .subscribe(() => {
          this.loadReservations();
          this.editingReservation = null;
        });
    }
  }

  deleteReservation(id: number): void {
    if (confirm('Confirmez-vous la suppression de cette réservation ?')) {
      this.reservationsService.deleteReservation(id).subscribe(() => {
        this.reservations = this.reservations.filter((r) => r.id !== id);
      });
    }
  }
}
