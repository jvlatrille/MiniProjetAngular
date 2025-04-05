import { Component, Input } from '@angular/core';
import { Jeu } from '../../models/jeu.model';

@Component({
  selector: 'app-jeu-card',
  standalone: false,
  templateUrl: './jeu-card.component.html',
  styleUrls: ['./jeu-card.component.scss'],
})
export class JeuCardComponent {
  @Input() jeu!: Jeu;
}
