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

  editReservation(id: number): void {
    this.router.navigate(['/reservations/edit', id]);
  }
  
  deleteReservation(id: number): void {
    if (confirm('Confirmez-vous la suppression de cette réservation ?')) {
      this.reservationsService.deleteReservation(id).subscribe(() => {
        this.reservations = this.reservations.filter((r) => r.id !== id);
      });
    }
  }
}
