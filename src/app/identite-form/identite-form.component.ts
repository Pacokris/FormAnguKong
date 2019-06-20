import { Component, OnInit } from '@angular/core';
import { Identite } from '../identite-model/identite';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdentiteService } from '../identite-service/identite.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-identite-form',
  templateUrl: './identite-form.component.html',
  styleUrls: ['./identite-form.component.css'],
})
export class IdentiteFormComponent implements OnInit {

  model = new Identite(69389, 'CDN', 15121999, 1920845625856, 'string', 'string', 'string', 0, 'string', 'string', 'string',
    'string', 'string', 'string', 'string', 'string', 'string');

  createIdentite: FormGroup;
  submitted = false;
  identiteCree = false;

  constructor(private formBuilder: FormBuilder, private identiteService: IdentiteService, private router: Router) { }

  ngOnInit() {
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
      console.log("HOULAAAAAA")
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
      console.log("je passe par la");
      this.identiteService.createIdentite1(newIdentite)
        .subscribe(data => {
          this.identiteService.identiteConnected = data;
          console.log(data);
        }, _error => {
          this.submitted = false;
          this.router.navigate(['/identite-invalide']);
        }
        );
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
        console.log("et la");
      }
    }

    if (buttonType === 'createIdentite2') {
      console.log("je passe par la");
      this.identiteService.createIdentite2(newIdentite)
        .subscribe(data => {
          this.identiteService.identiteConnected = data;
          console.log(data);
        }, _error => {
          this.submitted = false;
          this.router.navigate(['/identite-invalide']);
        }
        );
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
        console.log("et la");
      }
    }

    if (buttonType === 'createIdentite3') {
      console.log("je passe par la");
      this.identiteService.createIdentite3(newIdentite)
        .subscribe(data => {
          this.identiteService.identiteConnected = data;
          console.log(data);
        }, _error => {
          console.log("ICI AUSSI");
          this.submitted = false;
          this.router.navigate(['/identite-invalide']);
        }
        );
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
        console.log("et la");
      }
    }
  }
  getTest() {
  };

  getPe() {
    return `https://authentification-candidat-r.pe-qvr.fr/connexion/XUI/#login/&realm=%2Findividu&goto=https%3A%2F%2Fauthentification-candidat-r.pe-qvr.fr%3A443%2Fconnexion%2Foauth2%2Fauthorize%3Fclient_id%3Dagent_kong_oidc%26realm%3Dindividu%26response_type%3Dcode%26scope%3Dprofile%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A4200`;
  }
}