import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuxListComponent } from './jeux/jeux-list/jeux-list.component';
import { ReservationsListComponent } from './reservations/reservations-list/reservations-list.component';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/jeux', pathMatch: 'full' },
  { path: 'jeux', component: JeuxListComponent },
  { path: 'reservations', component: ReservationsListComponent },
  { path: 'reservations/new', component: ReservationFormComponent },
  { path: '**', redirectTo: '/jeux' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
