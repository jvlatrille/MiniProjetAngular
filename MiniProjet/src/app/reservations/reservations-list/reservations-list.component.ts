import { Component } from '@angular/core';
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

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  deleteReservation(id: number): void {
    if (confirm('Confirmez-vous la suppression de cette réservation ?')) {
      this.reservationsService.deleteReservation(id).subscribe(() => {
        // Met à jour la liste localement après suppression
        this.reservations = this.reservations.filter((r) => r.id !== id);
      });
    }
  }
}
