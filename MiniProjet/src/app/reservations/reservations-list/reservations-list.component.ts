import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservations-list',
  standalone: false,
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.scss',
})
export class ReservationsListComponent {
  reservations: Reservation[] = [];
  editingReservation: Reservation | null = null;

  constructor(
    private reservationsService: ReservationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationsService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  startEditing(reservation: Reservation): void {
    if (reservation.status === 'Confirmée') {
      alert("Cette réservation est confirmée et ne peut pas être modifiée.");
      return;
    }
    // On clone l'objet pour éviter de modifier directement la liste
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
          // Recharger la liste après la mise à jour
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
