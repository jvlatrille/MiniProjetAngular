import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { JeuxService } from '../../services/jeux.service';
import { ApiService } from '../../services/api.service';
import { Jeu } from '../../models/jeu.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jeu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss'],
})
export class JeuComponent implements OnInit {
  jeu!: Jeu | null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private jeuxService: ApiService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jeuxService.getUnJeu(id).subscribe({
      next: (data) => {
        this.jeu = data;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });
  }
}
