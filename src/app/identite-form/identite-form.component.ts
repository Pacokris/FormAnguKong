import {Component, OnInit} from '@angular/core';
import {Identite} from '../identite-model/identite';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IdentiteService} from '../identite-service/identite.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-identite-form',
  templateUrl: './identite-form.component.html',
  styleUrls: ['./identite-form.component.css']
})
export class IdentiteFormComponent implements OnInit {

  model = new Identite(69389, 'CDN', 15121999, 1920845625856, 'string', 'string', 'string', 0, 'string', 'string', 'string',
    'string', 'string', 'string', 'string', 'string', 'string');

  createIdentite: FormGroup;
  submitted = false;
  identiteCree = false;

  constructor(private formBuilder: FormBuilder, private identiteService: IdentiteService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.initialisationForm();
  }

  initialisationForm() {
    this.submitted = false;
    this.identiteCree = false;
    this.createIdentite = this.formBuilder.group({
      code_lieu_naissance: [69389, Validators.required],
      code_pays_naissance: ['CDN', Validators.required],
      date_naissance: [15121999, Validators.required],
      num_assure: [1920845625856, Validators.required],
      nom_naissance: ['string', Validators.required],
      liste_prenoms: ['string', Validators.required],
      nom_usage: ['string', Validators.required],
      code_sexe: [0, Validators.required],
      libelle_departement: ['string', Validators.required],
      libelle_commune: ['string', Validators.required],
      libelle_pays: ['string', Validators.required],
      libelle_localite: ['string', Validators.required],
      nom_marital: ['string', Validators.required],
      nom_naissance_pere: ['string', Validators.required],
      liste_prenoms_pere: ['string', Validators.required],
      nom_naissance_mere: ['string', Validators.required],
      liste_prenoms_mere: ['string', Validators.required],
    });
  }

  get f() {
    return this.createIdentite.controls;
  }

  onSubmit(buttonType): void {
    this.submitted = true;

    if (this.createIdentite.invalid) {
      this.router.navigate(['/identite-invalide']);
    }

    const formValue = this.createIdentite.value;
    const identiteTrue = this.identiteCree = true;
    const newIdentite = new Identite(
      formValue.code_lieu_naissance,
      formValue.code_pays_naissance,
      formValue.date_naissance,
      formValue.num_assure,
      formValue.nom_naissance,
      formValue.liste_prenoms,
      formValue.nom_usage,
      formValue.code_sexe,
      formValue.libelle_departement,
      formValue.libelle_commune,
      formValue.libelle_pays,
      formValue.libelle_localite,
      formValue.nom_marital,
      formValue.nom_naissance_pere,
      formValue.liste_prenoms_pere,
      formValue.nom_naissance_mere,
      formValue.liste_prenoms_mere
    );

    if (buttonType === 'createIdentite1') {
      this.identiteService.createIdentite1(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }

    if (buttonType === 'createIdentite2') {
      this.identiteService.createIdentite2(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }

    if (buttonType === 'createIdentite3') {
      this.identiteService.createIdentite3(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }
  }
}
