import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../../models/reservation.model';
import { JeuxService } from '../../services/jeux.service';
import { Jeu } from '../../models/jeu.model';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  editMode: boolean = false;
  reservationId?: number;
  jeux: Jeu[] = [];

  constructor(
    private fb: FormBuilder,
    private reservationsService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute,
    private jeuxService: JeuxService
  ) {
    this.reservationForm = this.fb.group({
      nomClient: ['', [Validators.required, Validators.minLength(3)]],
      emailClient: ['@gmail.com', [Validators.required, Validators.email]],
      telClient: ['', Validators.required],
      jeuClient: ['', Validators.required],
      plateformeClient: ['', Validators.required],
      reservationDate: ['', Validators.required],
      status: ['En attente', Validators.required],
    });
  }

  ngOnInit(): void {
    this.jeuxService.getJeux().subscribe((data: Jeu[]) => {
      this.jeux = data;
    });

    // Préremplissage via queryParams (pour réservation directe depuis un jeu)
    this.route.queryParams.subscribe(params => {
      if (params['jeu'] && params['plateforme']) {
        this.reservationForm.patchValue({
          jeuClient: params['jeu'],
          plateformeClient: params['plateforme']
        });
      }
    });

    this.route.paramMap.subscribe((params: any) => {
      const idParam = params.get('id');
      if (idParam) {
        this.editMode = true;
        this.reservationId = +idParam;
        this.reservationsService.getUneReservation(this.reservationId).subscribe((reservation) => {
          if (reservation.status === 'Confirmée') {
            alert("Comment vous avez fait pour modifier une réservation confirmée ???");
            this.router.navigate(['/reservations']);
          } else {
            this.reservationForm.patchValue({
              nomClient: reservation.nomClient,
              emailClient: reservation.emailClient,
              telClient: reservation.telClient,
              jeuClient: reservation.jeuClient,
              plateformeClient: reservation.plateformeClient,
              reservationDate: reservation.reservationDate,
              status: reservation.status,
            });
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      this.reservationsService.addReservation(reservation).subscribe(() => {
        this.router.navigate(['/reservations']);
      });
    } else {
      console.log('Le formulaire est invalide :', this.reservationForm.value);
    }
  }
}
