import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../../models/reservation.model';
// import { JeuxService } from '../../services/jeux.service';
import { ApiService } from '../../services/api.service';
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
    private jeuxService: ApiService
  ) {
    this.reservationForm = this.fb.group({
      nomClient: ['', [Validators.required, Validators.minLength(3)]],
      emailClient: ['', [Validators.required, Validators.email]],
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
      this.reservationForm.get('jeuClient')?.valueChanges.subscribe((selectedTitle) => {
        const selectedGame = this.jeux.find(jeu => jeu.titre === selectedTitle);
        if (selectedGame) {
          this.reservationForm.get('plateformeClient')?.setValue(selectedGame.plateforme);
        } else {
          this.reservationForm.get('plateformeClient')?.setValue('');
        }
      });
    });

    this.route.queryParams.subscribe(params => {
      if (params['jeu'] && params['plateforme']) {
        this.reservationForm.patchValue({
          jeuClient: params['jeu'],
          plateformeClient: params['plateforme']
        });
      }
    });

    // Gestion du mode édition si un id est présent dans les paramètres de route
    this.route.paramMap.subscribe((params: any) => {
      const idParam = params.get('id');
      if (idParam) {
        this.editMode = true;
        this.reservationId = +idParam;
        this.reservationsService.getUneReservation(this.reservationId).subscribe((reservation) => {
          if (reservation.status === 'Confirmée') {
            alert("Modification impossible : cette réservation est confirmée.");
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
      console.log('Formulaire invalide :', this.reservationForm.value);
    }
  }
}
