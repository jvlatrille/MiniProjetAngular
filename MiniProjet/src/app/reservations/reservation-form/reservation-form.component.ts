import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
})
export class ReservationFormComponent {
  reservationForm: FormGroup;
  editMode: boolean = false;
  reservationId?: number; 

  constructor(
    private fb: FormBuilder,
    private reservationsService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.reservationForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone: ['', Validators.required],
      gameTitle: ['', Validators.required],
      platform: ['', Validators.required],
      reservationDate: ['', Validators.required],
      status: ['En attente', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const idParam = params.get('id');
      if (idParam) {
        this.editMode = true;
        this.reservationId = +idParam;
        this.reservationsService.getReservation(this.reservationId).subscribe(reservation => {
          if (reservation.status === 'Confirmée') {
            alert("Cette réservation est confirmée et ne peut pas être modifiée.");
            this.router.navigate(['/reservations']);
          } else {
            this.reservationForm.patchValue({
              customerName: reservation.customerName,
              customerEmail: reservation.customerEmail,
              customerPhone: reservation.customerPhone,
              gameTitle: reservation.gameTitle,
              platform: reservation.platform,
              reservationDate: reservation.reservationDate,
              status: reservation.status
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
