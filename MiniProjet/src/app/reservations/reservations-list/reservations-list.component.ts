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
  editionReservation: Reservation | null = null;
  reservationCherchee: Reservation[] = [];
  controlerRecherche: FormControl = new FormControl('');
  subscription: Subscription = new Subscription();
  selectedPlateformeReservation: string = '';
  selectedStatusReservation: string = '';

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.listerReservations();
    this.subscription.add(
      this.controlerRecherche.valueChanges.subscribe((searchText) => {
        this.reservationCherchee = this.reservations.filter(
          (r) =>
            r.nomClient.toLowerCase().includes(searchText.toLowerCase()) ||
            r.emailClient.toLowerCase().includes(searchText.toLowerCase()) ||
            r.telClient.toLowerCase().includes(searchText.toLowerCase()) ||
            r.jeuClient.toLowerCase().includes(searchText.toLowerCase()) ||
            r.plateformeClient.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  listerReservations(): void {
    this.reservationsService.getReservations().subscribe((data) => {
      this.reservations = data;
      this.reservationCherchee = data;
    });
  }

  modifierReservation(reservation: Reservation): void {
    if (reservation.status === 'Confirmée') {
      alert("Comment t'as fait pour modifier une réservation confirmée ???");
      return;
    }
    this.editionReservation = { ...reservation };
  }

  annulerModificationReservation(): void {
    this.editionReservation = null;
  }

  sauvegarderModificationReservation(): void {
    if (this.editionReservation) {
      this.reservationsService
        .updateReservation(this.editionReservation.id!, this.editionReservation)
        .subscribe(() => {
          this.listerReservations();
          this.editionReservation = null;
        });
    }
  }

  deleteReservation(id: number): void {
    if (confirm('Êtes vous sûr de vouloir supprimer cette réservation ?')) {
      this.reservationsService.deleteReservation(id).subscribe(() => {
        this.reservations = this.reservations.filter((r) => r.id !== id);
        window.location.reload();
      });
    }
  }

  get distinctPlateformes(): string[] {
    return [...new Set(this.reservations.map(r => r.plateformeClient))];
  }

  get distinctStatuses(): string[] {
    return [...new Set(this.reservations.map(r => r.status))];
  }

  get filteredReservations(): Reservation[] {
    return this.reservationCherchee.filter(
      r => (!this.selectedPlateformeReservation || r.plateformeClient === this.selectedPlateformeReservation)
        && (!this.selectedStatusReservation || r.status === this.selectedStatusReservation)
    );
  }
}
