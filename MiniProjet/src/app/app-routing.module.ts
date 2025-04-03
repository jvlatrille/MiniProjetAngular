import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuxListComponent } from './jeux/jeux-list/jeux-list.component';
import { ReservationsListComponent } from './reservations/reservations-list/reservations-list.component';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';
import { JeuComponent } from './jeux/jeu/jeu.component';
import { JeuFormComponent } from './jeux/jeu-form/jeu-form.component';

const routes: Routes = [
  { path: '', component: JeuxListComponent },
  { path: 'jeux', component: JeuxListComponent },
  { path: 'jeux/:id', component: JeuComponent },
  { path: 'reservations', component: ReservationsListComponent },
  { path: 'reservations/new', component: ReservationFormComponent },
  { path: 'jeu-form', component: JeuFormComponent },
  { path: '**', redirectTo: '/jeux' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
