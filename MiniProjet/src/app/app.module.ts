import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuxListComponent } from './jeux/jeux-list/jeux-list.component';
import { ReservationsListComponent } from './reservations/reservations-list/reservations-list.component';
import { ReservationFormComponent } from './reservations/reservation-form/reservation-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JeuComponent } from './jeux/jeu/jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuxListComponent,
    ReservationsListComponent,
    ReservationFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    JeuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
