import { Component } from '@angular/core';
import { JeuxService } from '../../services/jeux.service';
import { Jeu } from '../../models/jeu.model';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jeux-list',
  standalone: false,
  templateUrl: './jeux-list.component.html',
  styleUrl: './jeux-list.component.scss',
})
export class JeuxListComponent {
  jeux: Jeu[] = [];
  jeuxCherche: Jeu[] = [];
  controlerRecherche: FormControl = new FormControl('');
  subscription: Subscription = new Subscription();

  constructor(private jeuxService: JeuxService) {}

  ngOnInit(): void {
    this.jeuxService.getJeux().subscribe((data) => {
      this.jeux = data;
      this.jeuxCherche = data;
    });

    this.subscription.add(
      this.controlerRecherche.valueChanges.subscribe(searchText => {
        this.jeuxCherche = this.jeux.filter(jeu =>
          jeu.titre.toLowerCase().includes(searchText.toLowerCase()) ||
          jeu.plateforme.toLowerCase().includes(searchText.toLowerCase()) ||
          jeu.genre.toLowerCase().includes(searchText.toLowerCase()) ||
          jeu.developpeur.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }
  
}
