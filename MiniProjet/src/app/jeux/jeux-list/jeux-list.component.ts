import { Component } from '@angular/core';
import { JeuxService } from '../../services/jeux.service';
import { Jeu } from '../../models/jeu.model';

@Component({
  selector: 'app-jeux-list',
  standalone: false,
  templateUrl: './jeux-list.component.html',
  styleUrl: './jeux-list.component.scss',
})
export class JeuxListComponent {
  jeux: Jeu[] = [];

  constructor(private jeuxService: JeuxService) {}

  ngOnInit(): void {
    this.jeuxService.getJeux().subscribe((data) => {
      this.jeux = data;
    });
  }
}
