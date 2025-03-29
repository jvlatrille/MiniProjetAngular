import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from '../../services/jeux.service';
import { Jeu } from '../../models/jeu.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jeu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss'],
})
export class JeuComponent implements OnInit {
  jeu!: Jeu;

  constructor(
    private route: ActivatedRoute,
    private jeuxService: JeuxService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jeuxService.getUnJeu(id).subscribe((data) => {
      this.jeu = data;
    });
  }
}
