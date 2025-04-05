import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/reservation.model';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservations-list',
  standalone: false,
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss'],
})
export class ReservationsListComponent implements OnInit, OnDestroy {
  reservations: Reservation[] = [];
  editionReservation: Reservation | null = null;
  reservationCherchee: Reservation[] = [];
  controlerRecherche: FormControl = new FormControl('');
  subscription: Subscription = new Subscription();
  selectedPlateformeReservation: string = '';
  selectedStatusReservation: string = '';
  selectedJeuReservation: string = '';

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.listerReservations();
    this.subscription.add(
      this.controlerRecherche.valueChanges.subscribe((searchText) => {
        this.reservationCherchee = this.reservations.filter((r) =>
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
      alert("Modification impossible : réservation confirmée.");
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
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?')) {
      this.reservationsService.deleteReservation(id).subscribe(() => {
        // Met à jour la liste localement sans recharger la page (plus opti)
        this.reservations = this.reservations.filter((r) => r.id !== id);
        this.reservationCherchee = this.reservationCherchee.filter((r) => r.id !== id);
      });
    }
  }



  get distinctPlateformes(): string[] {
    return [...new Set(this.reservations.map(r => r.plateformeClient))];
  }

  get distinctStatuses(): string[] {
    return [...new Set(this.reservations.map(r => r.status))];
  }

  get distinctJeux(): string[] {
    return [...new Set(this.reservations.map(r => r.jeuClient))];
  }

  get filteredReservations(): Reservation[] {
    return this.reservationCherchee.filter(
      r =>
        (!this.selectedPlateformeReservation || r.plateformeClient === this.selectedPlateformeReservation) &&
        (!this.selectedStatusReservation || r.status === this.selectedStatusReservation) &&
        (!this.selectedJeuReservation || r.jeuClient === this.selectedJeuReservation)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
