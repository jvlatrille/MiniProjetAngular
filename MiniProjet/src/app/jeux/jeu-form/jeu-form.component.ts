import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { JeuxService } from '../../services/jeux.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Jeu } from '../../models/jeu.model';

@Component({
  selector: 'app-jeu-form',
  standalone: false,
  templateUrl: './jeu-form.component.html',
  styleUrls: ['./jeu-form.component.scss'],
})
export class JeuFormComponent implements OnInit {
  jeuForm: FormGroup;
  thumbRegex!: RegExp;

  constructor(
    private fb: FormBuilder,
    private jeuxService: ApiService,
    private router: Router
  ) {
    this.jeuForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(3)]],
      plateforme: ['', [Validators.required]],
      genre: ['', Validators.required],
      developpeur: ['', Validators.required],
      dateDeSortie: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.thumbRegex)]]
    });
  }

  ngOnInit(): void {
    this.thumbRegex = new RegExp(
      'https?:\\/\\/.*\\.(?:png|jpg|jpeg|gif|svg|webp)$'
    );
    
    this.jeuForm.get('imageUrl')?.setValidators([
      Validators.required,
      Validators.pattern(this.thumbRegex)
    ]);
    this.jeuForm.get('imageUrl')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.jeuForm.valid) {
      const newJeu: Jeu = this.jeuForm.value;
      this.jeuxService.addJeu(newJeu).subscribe(() => {
        this.router.navigate(['/jeux']);
      });
    } else {
      console.log("Formulaire invalide", this.jeuForm.value);
    }
  }
}
