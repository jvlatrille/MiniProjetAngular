import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
import { Router } from '@angular/router';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
})
export class ReservationFormComponent {
  reservationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservationsService: ReservationsService,
    private router: Router
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

  ngOnInit(): void {}

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
